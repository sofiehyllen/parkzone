# ParkZone – Technical Case Study
Optimization & Modernization of a Parking Platform
Exam project – Spring 2024

---

## Overview
This project is a full frontend redesign and technical prototype of ParkZone’s public website.

The focus was not only on UX and visual redesign, but on building a scalable, component-based architecture using a modern frontend stack and headless CMS setup.

The prototype simulates a production-ready structure with dynamic content, API integration, reusable components, and a structured booking/payment flow.

---

## Architecture
The solution is built as a React-based SPA with separation of concerns between:
- UI components
- View logic
- Data fetching
- External content management
- Database-driven parking data

---

## Tech Stack
#### Frontend:
- React
- JavaScript (ES6+)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations)
- clsx (conditional class handling)
#### CMS:
- WordPress (Headless)
- WordPress REST API
#### Database:
- Firebase
- Firestore

---

## Data Structure
Firestore handles parking area data:
```
parking (collection)
   └── parkingArea (document)
          ├── city
          ├── address
          ├── hourPrice
          ├── subscriptionOptions
          └── metadata
```
Data is fetched via API and rendered dynamically per parking page.
This setup allows scalability without modifying frontend logic when adding new parking areas.

---

## Links
**Prototype**
https://parkzone-beige.vercel.app

**Design Manual**
https://www.figma.com/proto/XoLFbd4E32ZQjJFibZ514x/designmanual

**Repository**
https://github.com/sofiehyllen/parkzone

---

## Context
This project was developed as a final exam project.

It is not affiliated with ParkZone A/S and is intended as a conceptual redesign and technical case study.