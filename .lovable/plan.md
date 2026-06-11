## Add "Director (Research)" Vacancy to /career

Add a new vacancy card on `src/pages/Career.tsx` (placed at the top of the Current Vacancies list, above Vice Chancellor) for the AMET–MSRC Director (Research) appointment based on the uploaded PDF.

### Card content

- **Title:** Director (Research)
- **Sub-label:** AMET Maritime and Shipping Research Centre (AMET–MSRC)
- **Description:** AMET University invites applications from visionary, research-focused leaders (ideally 50–55 years) with a proven track record in applied research, product development, and patent creation to head the newly established AMET–MSRC. Global applications welcome, with a special invitation to Indian researchers and tech leaders abroad.
- **Qualifications:**
  - Master's (M.E./M.Tech/M.S.) in a relevant engineering/scientific discipline, or Senior Maritime Professional Certifications (e.g., Extra Master / Class 1 Engineer). Ph.D. NOT mandatory for strong industrial tech / product / patent track record.
  - 15–20 years experience in technical operations, industrial research, or technological product innovation.
- **Salary:** Highly competitive and negotiable based on research track record, patented technologies, and corporate product-launch experience.
- **How to Apply:** Submit a comprehensive CV and a 2-page research/product vision statement for AMET–MSRC 2047 to the Registrar at `registrar@ametuniv.ac.in`.

### Actions on the card

- **Send Application** button → `mailto:registrar@ametuniv.ac.in`
- **View Full Advertisement** button → opens the uploaded PDF in a new tab
- **Download PDF** button → downloads the PDF

### Files

- Copy the uploaded PDF to `public/documents/Appointment-Director-Research.pdf` so both view and download work.
- Edit `src/pages/Career.tsx` to insert the new `<Card>` as the first item in Current Vacancies, styled to match the existing vacancy cards (same border, icon, badge colors, button classes).

No new route/detail page is created — content is shown directly on /career as a self-contained card (matches the MoES-DOM/Marketing pattern).
