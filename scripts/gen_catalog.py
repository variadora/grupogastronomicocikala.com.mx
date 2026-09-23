"""Generate the CIKALA wholesale catalog PDF (branded, bilingual-lite)."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

BG = HexColor("#0A0B0A")
SURFACE = HexColor("#0E1410")
FG = HexColor("#F2F0E9")
DIM = HexColor("#8b948b")
PRIMARY = HexColor("#C84C32")
BORDER = HexColor("#212D24")

W, H = A4
IMG_DIR = "/tmp/cat"
OUT = "/app/frontend/public/catalogo-cikala-2026.pdf"

products = [
    ("01", "Especias & Condimentos", "Selección global, molida y en grano. Paprika, cúrcuma, chiles secos, pimienta y más.", "especias.jpg"),
    ("02", "Abarrotes & Secos", "Granos, harinas, legumbres y despensa por volumen para operación continua.", "abarrotes.jpg"),
    ("03", "Frescos & Vegetales", "Producto de temporada con origen verificado y trazabilidad garantizada.", "frescos.jpg"),
    ("04", "Insumos de Cocina", "Suministros de acero inoxidable, herramientas y utensilios para cocina profesional.", "insumos.jpg"),
]

services = [
    "Sourcing & Curaduría de producto en origen",
    "Distribución & Logística con control de temperatura",
    "Suministro continuo con inventario garantizado",
    "Importación & comercio internacional",
]

c = canvas.Canvas(OUT, pagesize=A4)


def bg(color=BG):
    c.setFillColor(color)
    c.rect(0, 0, W, H, fill=1, stroke=0)


def logo(x, y, s=1.0):
    # simple mark: arc-ish C via primary line + box
    c.setStrokeColor(PRIMARY)
    c.setLineWidth(2.4 * s)
    c.arc(x, y - 7 * s, x + 14 * s, y + 7 * s, startAng=40, extent=280)
    c.setStrokeColor(FG)
    c.setLineWidth(2 * s)
    c.rect(x + 4 * s, y - 3 * s, 6 * s, 6 * s, fill=0, stroke=1)


# ---------- COVER ----------
bg()
c.setFillColor(PRIMARY)
c.rect(0, H - 6 * mm, W, 6 * mm, fill=1, stroke=0)

logo(22 * mm, H - 26 * mm, 1.2)
c.setFillColor(FG)
c.setFont("Helvetica-Bold", 16)
c.drawString(34 * mm, H - 29 * mm, "CIKALA")

c.setFillColor(PRIMARY)
c.setFont("Helvetica-Bold", 9)
c.drawString(22 * mm, H - 55 * mm, "INTERMEDIARIOS DE COMERCIO AL POR MAYOR")

c.setFillColor(FG)
c.setFont("Helvetica-Bold", 44)
c.drawString(21 * mm, H - 80 * mm, "Catálogo")
c.setFont("Helvetica-Bold", 44)
c.drawString(21 * mm, H - 98 * mm, "Mayorista")
c.setFillColor(PRIMARY)
c.setFont("Helvetica-Oblique", 30)
c.drawString(21 * mm, H - 118 * mm, "CIKALA Select · 2026")

c.setFillColor(DIM)
c.setFont("Helvetica", 11)
text = c.beginText(22 * mm, H - 140 * mm)
for ln in [
    "Grupo Gastronómico Cikala, S.A.S. de C.V. conecta a productores,",
    "distribuidores y cocinas profesionales con un catálogo variado de",
    "insumos de grado premium — al por mayor.",
]:
    text.textLine(ln)
c.drawText(text)

# cover image strip
try:
    img = ImageReader(f"{IMG_DIR}/especias.jpg")
    c.drawImage(img, 0, 0, W, 95 * mm, preserveAspectRatio=True, anchor='c', mask='auto')
except Exception as e:
    print("cover img", e)
c.setFillColor(BG)
c.setFont("Helvetica", 8)
c.drawRightString(W - 22 * mm, 12 * mm, "ventas@cikala.mx")
c.showPage()

# ---------- PRODUCT PAGES ----------
for tag, title, desc, imgf in products:
    bg()
    # image top half
    try:
        img = ImageReader(f"{IMG_DIR}/{imgf}")
        c.drawImage(img, 0, H - 120 * mm, W, 120 * mm, preserveAspectRatio=True, anchor='n', mask='auto')
    except Exception as e:
        print(imgf, e)
    c.setFillColor(BG)
    c.rect(0, H - 122 * mm, W, 4 * mm, fill=1, stroke=0)

    c.setFillColor(PRIMARY)
    c.setFont("Helvetica-Bold", 40)
    c.drawString(22 * mm, H - 155 * mm, tag)
    c.setFillColor(FG)
    c.setFont("Helvetica-Bold", 26)
    c.drawString(22 * mm, H - 172 * mm, title)

    c.setFillColor(DIM)
    c.setFont("Helvetica", 12)
    t = c.beginText(22 * mm, H - 185 * mm)
    words, line = desc.split(), ""
    for w in words:
        if len(line + w) > 62:
            t.textLine(line); line = ""
        line += w + " "
    t.textLine(line)
    c.drawText(t)

    c.setStrokeColor(BORDER)
    c.setLineWidth(1)
    c.line(22 * mm, 28 * mm, W - 22 * mm, 28 * mm)
    c.setFillColor(DIM)
    c.setFont("Helvetica", 8)
    c.drawString(22 * mm, 20 * mm, "CIKALA · Catálogo Mayorista 2026")
    c.drawRightString(W - 22 * mm, 20 * mm, "ventas@cikala.mx")
    c.showPage()

# ---------- SERVICES / CONTACT ----------
bg()
c.setFillColor(PRIMARY)
c.setFont("Helvetica-Bold", 9)
c.drawString(22 * mm, H - 30 * mm, "SERVICIOS")
c.setFillColor(FG)
c.setFont("Helvetica-Bold", 30)
c.drawString(22 * mm, H - 45 * mm, "Cadena de abasto integrada")

y = H - 65 * mm
for s in services:
    c.setFillColor(SURFACE)
    c.roundRect(22 * mm, y - 14 * mm, W - 44 * mm, 16 * mm, 3 * mm, fill=1, stroke=0)
    c.setFillColor(PRIMARY)
    c.circle(30 * mm, y - 6 * mm, 1.6 * mm, fill=1, stroke=0)
    c.setFillColor(FG)
    c.setFont("Helvetica", 12)
    c.drawString(36 * mm, y - 8 * mm, s)
    y -= 20 * mm

c.setFillColor(BORDER)
c.setLineWidth(1)
c.line(22 * mm, y - 4 * mm, W - 22 * mm, y - 4 * mm)

c.setFillColor(PRIMARY)
c.setFont("Helvetica-Bold", 9)
c.drawString(22 * mm, y - 22 * mm, "CONTACTO")
c.setFillColor(FG)
c.setFont("Helvetica-Bold", 22)
c.drawString(22 * mm, y - 36 * mm, "Hablemos de tu abasto")
c.setFillColor(DIM)
c.setFont("Helvetica", 12)
c.drawString(22 * mm, y - 48 * mm, "Correo: ventas@cikala.mx")
c.drawString(22 * mm, y - 56 * mm, "Grupo Gastronómico Cikala, S.A.S. de C.V.")

logo(22 * mm, 26 * mm, 1.0)
c.setFillColor(FG)
c.setFont("Helvetica-Bold", 13)
c.drawString(33 * mm, 24 * mm, "CIKALA")
c.setFillColor(DIM)
c.setFont("Helvetica", 8)
c.drawRightString(W - 22 * mm, 24 * mm, "© 2026 Grupo Gastronómico Cikala. Todos los derechos reservados.")
c.showPage()

c.save()
print("PDF generated at", OUT)
