## Plan

PDF: Pre-PhD Thesis Presentation – Mr. A. Vidya (Physics), 22.05.2026 at 10:00 AM, A/V Hall, Dr. VBS Rajan Library.

### File to upload
- `public/documents/pre-phd-thesis-presentation-a-vidya.pdf` (user will upload, or I can copy from the upload)

### Changes

1. **src/pages/LatestUpdates.tsx** (homepage Latest Updates source)
   Add new entry at top of `updates` array:
   ```ts
   {
     title: 'Pre-PhD Thesis Presentation - Mr. A. Vidya (22.05.2026)',
     category: 'Pre-PhD',
     icon: Users,
     href: '/documents/pre-phd-thesis-presentation-a-vidya.pdf',
   }
   ```

2. **src/pages/examination/Announcement.tsx**
   Add new entry at top of `announcements` array:
   ```ts
   {
     title: 'Notification for Pre-PhD Thesis Presentation of Mr. A. Vidya',
     href: '/documents/pre-phd-thesis-presentation-a-vidya.pdf',
   }
   ```

3. Copy the uploaded PDF into `public/documents/` so the link resolves locally.

### Note
If the homepage's "Latest Updates" widget reads from a different source than `LatestUpdates.tsx`, I'll also update `src/components/LatestUpdatesSection.tsx` accordingly during implementation.
