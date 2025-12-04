# Web Development Fundamentals – Hands-On Midterm Exam

**Name:** `__________________________________________`  
**Date:** `__________________________________________`

---

## General Instructions

You will complete this exam by **building a small multi-page website** on your computer.

- You must create **three HTML pages**, **one shared CSS file**, and **one JS file**.
- You may **not** use any frameworks (no Bootstrap, React, etc.). Plain HTML, CSS, and JavaScript only.
- Do **not** copy/paste existing code you’ve written before. Write your own code during the exam.
- Save your work frequently.

When you are finished, you will submit **all files** (HTML, CSS, JS) as instructed by your instructor.

---

## Scenario

You are building a small website called **"Study Buddy"** to help students keep track of their study tasks and contact the site owner.

Your website will consist of **three pages**:

1. `index.html` – Home page  
2. `tasks.html` – Study Tasks page  
3. `contact.html` – Contact page  

All three pages must:

- Use the **same external CSS file**: `styles.css`
- Use the **same external JavaScript file**: `script.js`
- Include a **navigation menu** so the user can move between all three pages

---

## File & Folder Setup (Required)

Create the following files in a single folder:

- `index.html`
- `tasks.html`
- `contact.html`
- `styles.css`
- `script.js`

All HTML pages must include:

- Correct **doctype** (`<!DOCTYPE html>`)
- `<html>`, `<head>`, and `<body>` elements
- A `<title>` that matches the page (e.g., “Study Buddy – Home”)
- A `<link>` tag to include `styles.css`
- A `<script>` tag to include `script.js` (you may place it at the end of `<body>`)

---

## Part 1 – HTML Structure & Semantics (40 pts)

### 1.1. Navigation (applies to all pages) – 10 pts

On every page, create a **navigation bar** at the top that:

- Uses an **unordered list** (`<ul>`) for the menu
- Contains links (`<a>`) to:
  - Home (`index.html`)
  - Study Tasks (`tasks.html`)
  - Contact (`contact.html`)
- Includes **one external link** that opens in a **new tab** using `target="_blank"`  
  - Example: link to your school or a documentation site

Your navigation must demonstrate:

- Correct use of `<ul>` and `<li>`
- Correct use of `href` and `target="_blank"` attributes

---

### 1.2. `index.html` – Home Page – 10 pts

Create a home page that includes:

1. A main heading with the site name, e.g., `<h1>Study Buddy</h1>`
2. A short introduction paragraph explaining the purpose of the site
3. An **unordered list** of at least **3 features** of the site (e.g., “Track tasks”, “Contact tutor”, etc.)
4. A **highlighted callout** paragraph (e.g., “Remember to take breaks!”)  
   - Give this element a class, for example `class="highlight"`  
   - You will style `.highlight` later in CSS

---

### 1.3. `tasks.html` – Study Tasks Page – 10 pts

On `tasks.html`, create content that demonstrates **ordered vs unordered lists**:

1. A heading: “Study Tasks”
2. A short paragraph describing that this page shows tasks and recommended order.
3. An **ordered list** (`<ol>`) of at least **3 study steps** (e.g., “1. Review notes, 2. Do practice problems, 3. Take quiz”).  
   - This should represent a sequence where **order matters**.
4. An **unordered list** (`<ul>`) of at least **3 resources or topics** (e.g., “Math”, “History”, “Biology”).  
   - Order should **not** matter here.

You must clearly use `<ol>` where sequence matters and `<ul>` where it doesn’t.

---

### 1.4. `contact.html` – Contact Page with Form – 10 pts

On `contact.html`, create a “Contact Us” form that includes:

1. A heading: “Contact Us”
2. A brief paragraph explaining how users can reach you.
3. A `<form>` element containing:
   - A **text input** for the user’s name  
     - Use `<input type="text">`
   - A **text input** for the user’s email
   - A **multi-line message field** using `<textarea></textarea>`  
     - Do **not** use `<input type="text">` for the message.
   - A **submit button**

Make sure each field has an associated `<label>` element.

---

## Part 2 – CSS: Selectors, Layout, and Box Model (30 pts)

All styling must be placed in **`styles.css`** and linked from each HTML file.

### 2.1. Basic Page Styling – 10 pts

In `styles.css`:

1. Set a base font family for the entire page using the `body` selector (e.g., sans-serif).
2. Add some padding to the `body` so the content doesn’t touch the browser edges.
3. Style the navigation menu:
   - Remove default list bullets from the nav `<ul>`.
   - Display the nav items horizontally (e.g., using `display: inline-block;` or `flex`).
   - Add some spacing between nav links.

---

### 2.2. Element Selectors vs Class Selectors – 10 pts

Demonstrate correct use of element and class selectors:

1. Use an **element selector** to style **all** `<h1>` elements (e.g., change color or font size).
2. Define a **class selector** named `.highlight` that:
   - Changes background color
   - Changes text color or adds some padding
3. Apply the `.highlight` class to **at least one element** in your HTML (already required on `index.html`).

Your CSS should show that:

- All `<h1>` elements share a default style.
- The `.highlight` class can be applied to any element (e.g., `<p class="highlight">...`).

---

### 2.3. Box Model and Hiding Elements – 10 pts

Create and style an element to demonstrate the **CSS box model** and visibility rules:

1. Add a `<div>` on **any page** (you may call it a “note” or “tip” box) with a class, e.g., `class="info-box"`.
2. In `styles.css`, style `.info-box` to clearly show the box model:
   - Give it a background color
   - Add **padding**
   - Add a **border**
   - Add a **margin**
3. Add **two CSS classes** to demonstrate hiding elements:
   ```css
   .hide-with-display {
       display: none;
   }

   .hide-with-visibility {
       visibility: hidden;
   }
