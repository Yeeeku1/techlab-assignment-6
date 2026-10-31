# TechLab — Assignment 6

Student: **Yerasyl Dauyl**  
Group: **SE-2527**

Twelve separate pages demonstrating jQuery selectors, effects, DOM manipulation, forms, and animations. Task 11 is an interactive image gallery. The interface is English-only. Student-written HTML, CSS, and JavaScript are formatted and contain no comments.

## Run locally

Extract the ZIP, open this folder in VS Code, and open index.html with Live Server. You can also open index.html directly in a browser. Save changes and reload the local page to test. Each page loads its own taskN.js file; common.js controls the mobile menu and reduced-motion preference.

The full jQuery 3.7.1 build loads from the official CDN. A local, unmodified MIT-licensed copy is used if the CDN fails. Its license notice is retained. The slim build is not used because the assignment needs effects and animations. No installation or build step is needed.

## Task map

| Task | Page        | JavaScript | Demonstration                                 |
| ---- | ----------- | ---------- | --------------------------------------------- |
| 0    | index.html  | task0.js   | $(document).ready()                           |
| 1    | task1.html  | task1.js   | ID · class · tag · .text() · .html() · .css() |
| 2    | task2.html  | task2.js   | .hide() · .show() · .toggle()                 |
| 3    | task3.html  | task3.js   | .fadeIn() · .fadeOut() · .fadeToggle()        |
| 4    | task4.html  | task4.js   | .slideUp() · .slideDown() · .slideToggle()    |
| 5    | task5.html  | task5.js   | .append() · .prepend() · .remove()            |
| 6    | task6.html  | task6.js   | .attr()                                       |
| 7    | task7.html  | task7.js   | .val() · .text() · input                      |
| 8    | task8.html  | task8.js   | .animate()                                    |
| 9    | task9.html  | task9.js   | Chained .animate() calls                      |
| 10   | task10.html | task10.js  | One .animate() call                           |
| 11   | task11.html | task11.js  | Fade · filter · enlarge                       |

Task 0 uses the valid syntax $(document).ready(function () { ... }); and prints exactly "jQuery is ready!" in the browser console. The assignment document contains a punctuation typo in its ready example.

Task 1 demonstrates ID, class, and scoped tag selectors, .text(), .html(), and .css(). Task 5 offers both append and prepend controls and handles an empty list. Task 7 previews Name and Email with .val() and .text(), validates locally, and never sends or stores personal data. Tasks 8–10 have reset controls and prevent animation queues from accumulating. Resizing resets their stages so the square remains in bounds. Reduced-motion preference completes effects immediately.

Task 11 filters six original technology illustrations, fades thumbnails in/out, and enlarges the selected image in an accessible modal dialog. Close with the button, Escape, or the backdrop. Focus returns to the selected thumbnail.

## Files and assets

- index.html and task1.html–task11.html: page structure and shared navigation.
- task0.js–task11.js: separate jQuery task implementations.
- styles.css: shared responsive layout.
- common.js: shared menu and reduced-motion setting.
- jquery-fallback.js and vendor/: offline backup for the CDN dependency.
- assets/: six original SVG illustrations created for this project; no external image requests.
- VERIFICATION.md: completed browser checks.

## Repository and website

- Repository: https://github.com/Yeeeku1/techlab-assignment-6
- Website: https://yeeeku1.github.io/techlab-assignment-6/

GitHub Pages serves the main branch from the repository root. Open index.html with Live Server to test local changes before uploading them.

## References

- [jQuery API](https://api.jquery.com/)
- [Document ready](https://api.jquery.com/ready/)
- [Animation](https://api.jquery.com/animate/)
- [Official CDN](https://releases.jquery.com/)

The project demonstrates browser-side interactions only. Form values, list changes, filters, and animation states reset when the page is reloaded.

