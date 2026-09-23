"""Backend API tests for CIKALA landing page"""
import os
import pytest
import requests
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://cikala-commerce.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "CIKALA" in r.json().get("message", "")


def test_create_and_list_contact(api):
    unique = f"TEST_{uuid.uuid4().hex[:8]}"
    payload = {
        "name": unique,
        "email": f"{unique.lower()}@example.com",
        "company": "TestCo",
        "message": "Need wholesale spices",
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == "TestCo"
    assert "id" in data
    assert "created_at" in data

    # GET verify persistence
    r2 = api.get(f"{BASE_URL}/api/contact")
    assert r2.status_code == 200
    items = r2.json()
    assert any(m["name"] == unique for m in items)


def test_invalid_email_rejected(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "X", "email": "not-an-email", "message": "hi"
    })
    assert r.status_code == 422


def test_missing_required_fields(api):
    r = api.post(f"{BASE_URL}/api/contact", json={"email": "a@b.com"})
    assert r.status_code == 422


def test_optional_company(api):
    payload = {
        "name": "TEST_nocompany",
        "email": "nocomp@example.com",
        "message": "test",
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200
    assert r.json()["company"] == ""
