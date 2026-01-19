# India Reservation Map 🇮🇳

An interactive web application (dashboard) to visualize and analyze reservation (quota) policies across different states in India.

## 🚀 Features
- **Interactive Map**: Click on any state to view its specific reservation details.
- **Detailed Breakdowns**: View percentages for SC, ST, OBC, EWS, and other specific categories.
- **Legal Status Indicators**: Automatically highlights states that have breached the 50% reservation cap (Indra Sawhney judgement) and notes pending legal outcomes.
- **Responsive Design**: Works on Desktop and Mobile.
- **Search Functionality**: Quickly find specific states or union territories.

## 🛠️ Tech Stack
- **Framework**: React (v19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Map Visualization**: React Simple Maps (TopoJSON/GeoJSON)

## 🏃‍♂️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/smbhvgpt/india-reserved.git
    ```
2.  **Install dependencies**
    ```bash
    cd india-reserved
    npm install
    ```
3.  **Start the development server**
    ```bash
    npm run dev
    ```

## 🌐 Deployment
This project is a **Static Web App**. It can be hosted for free on specific platforms or standard shared hosting.

-   **Build Command**: `npm run build`
-   **Output Directory**: `dist/`

### Hosting on Hostinger/Apache
If hosting on a subfolder in shared hosting, ensure you add the `.htaccess` file (included in this repo guides) to handle client-side routing.
