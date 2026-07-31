# 🚀 NASA Astronomy Picture of the Day (APOD)

Display NASA's **Astronomy Picture of the Day (APOD)** using the official NASA API.

---

## 📌 Project Description

The NASA APOD API provides a new astronomy image every day along with its title, explanation, date, and copyright information.

This project fetches and displays the daily astronomy picture using JavaScript Fetch API or Axios.


## 📄 Sample Response

```json
{
  "date": "2025-07-20",
  "explanation": "This beautiful nebula...",
  "hdurl": "https://apod.nasa.gov/apod/image.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "The Eagle Nebula",
  "url": "https://apod.nasa.gov/apod/image_small.jpg"
}
```

---

# 📋 Response Properties

| Property | Description |
|----------|-------------|
| date | Image date |
| title | Image title |
| explanation | Full explanation |
| url | Image URL |
| hdurl | HD Image URL |
| media_type | image or video |
| service_version | API version |
| copyright | Copyright owner (optional) |

---

# 🖼️ Display Data

### Image

```javascript
document.querySelector("img").src = data.url;
```

### Title

```javascript
document.querySelector("h2").textContent = data.title;
```

### Date

```javascript
document.querySelector(".date").textContent = data.date;
```

### Description

```javascript
document.querySelector(".description").textContent =
data.explanation;
```

---

# 📁 Project Structure

```
NASA-APOD/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 💻 Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API / Axios
- NASA APOD API

---

# ✨ Features

- Daily Astronomy Image
- HD Image Support
- Title
- Date
- Description
- Responsive Design
- API Integration
- Loading Indicator
- Error Handling

---

# 🚀 Future Improvements

- Search by Date
- Download HD Image
- Dark Mode
- Save Favorites
- Share Image
- Image Zoom
- Previous & Next Date Navigation

---

# 📚 Learnings

- Working with REST APIs
- JSON Parsing
- Fetch API
- Axios
- DOM Manipulation
- Async JavaScript
- Error Handling

---

# 📸 Preview

```
--------------------------------------------
        Astronomy Picture of the Day

        🌌 Beautiful Galaxy Image

Title:
The Eagle Nebula

Date:
2025-07-20

Description:
This image shows...

--------------------------------------------
```

---

# 📜 License

This project is for educational purposes.

NASA Open API © NASA