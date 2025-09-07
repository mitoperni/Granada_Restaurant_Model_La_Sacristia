# 🍽️ La Sacristía - Restaurante Granada

### 📖 Project Description

**La Sacristía** is a modern, fully SEO-optimized website for a traditional Andalusian cuisine restaurant located in Granada, Spain. This project demonstrates a **before vs after** transformation to showcase the digital upgrade of a restaurant that previously only had a Facebook presence.

### 🎯 Project Goal

- **Client**: La Sacristía Restaurant (Granada, Spain)
- **Need**: Transition from Facebook-only to a complete professional website
- **Objective**: Create a modern, fast, and SEO-optimized digital presence
- **Result**: Professional website serving as a model for other restaurants

### ✨ Key Features

#### 🌐 **Internationalization**
- **Languages**: Spanish and English
- **Implementation**: i18next with automatic detection
- **Multilingual SEO**: Automatic hreflang tags
- **Language selector**: Visible in navbar

#### 🚀 **Modern Technologies**
- **Frontend**: React.js 19 with Vite
- **Styles**: TailwindCSS for responsive design
- **Routing**: React Router v6 with page navigation
- **SEO**: React Helmet Async for dynamic meta tags
- **Performance**: Lazy loading and image optimization

#### 📱 **Responsive Design**
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl for different screens
- **UI/UX**: Intuitive navigation with smooth animations
- **Accessibility**: ARIA labels and proper semantics

#### 🎨 **Implemented Sections**
- **🏠 Home**: Hero section with background image and CTA
- **📋 Menu**: Dynamic menu organized by categories
- **📞 Reservations**: WhatsApp and phone integration
- **🖼️ Gallery**: Image grid with zoom modal
- **⭐ Reviews**: Customer reviews with star system
- **📍 Contact**: Complete information with Google Maps
- **🔗 Footer**: Links, social media, and legal information

### 🔍 Maximum SEO Optimization

#### **📄 Fundamental SEO Files**
- **`sitemap.xml`**: Site map with hreflang
- **`robots.txt`**: Crawler instructions
- **Breadcrumbs**: Structured navigation with schema.org

#### **🎯 Advanced Meta Tags**
- **Dynamic titles** per page and language
- **Optimized descriptions** with long-tail keywords
- **Complete Open Graph** for social media
- **Twitter Cards** for better sharing
- **Canonical URLs** to avoid duplicate content

#### **📊 Structured Data (Schema.org)**
- **Restaurant Schema**: Complete restaurant information
- **Menu Schema**: Structured menu with categories
- **ContactPoint Schema**: Multiple contact points
- **BreadcrumbList Schema**: Structured navigation
- **GeoCoordinates**: Exact location for local SEO

#### **🌍 International SEO**
- **Hreflang tags**: Automatic ES ↔ EN
- **Geo-targeting**: Location meta tags
- **Multi-language URLs**: Language-optimized routes

### 🛠️ Installation & Development

#### **Prerequisites**
```bash
Node.js >= 18.0.0
npm >= 8.0.0
```

#### **Installation**
```bash
# Clone repository
git clone https://github.com/your-username/la-sacristia-restaurant.git

# Navigate to directory
cd la-sacristia-restaurant

# Install dependencies
npm install
```

#### **Development Commands**
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

### 📁 Project Structure

```
src/
├── assets/          # Static resources
├── components/      # Reusable components
│   ├── Navbar.jsx   # Main navigation
│   ├── Footer.jsx   # Footer
│   ├── SEOHead.jsx  # Dynamic meta tags
│   └── Breadcrumbs.jsx # Breadcrumb navigation
├── pages/           # Pages and sections
│   ├── HomePage.jsx     # Main page
│   ├── MenuPage.jsx     # Menu page
│   ├── ReservationsPage.jsx # Reservations page
│   ├── ContactPage.jsx  # Contact page
│   ├── Home.jsx     # Hero section
│   ├── Menu.jsx     # Menu section
│   ├── Gallery.jsx  # Image gallery
│   ├── Reviews.jsx  # Customer reviews
│   ├── Contact.jsx  # Contact information
│   └── Reservations.jsx # Reservation system
├── i18n/            # Internationalization
│   ├── index.js     # i18next configuration
│   └── locales/
│       ├── es/      # Spanish translations
│       └── en/      # English translations
├── App.jsx          # Main component
└── main.jsx         # Entry point

public/
├── sitemap.xml      # Site map
└── robots.txt       # Crawler instructions
```

### 🌟 Implemented SEO Features

#### **🎯 Local SEO (Granada)**
- Exact GPS coordinates (37.1773, -3.5986)
- Geographic meta tags (ES-AN, Granada)
- Structured data with location
- Integrated Google Maps

#### **📱 Technical SEO**
- Optimized meta robots
- Automatic canonical URLs
- XML sitemap with hreflang
- Configured robots.txt
- Image optimization (alt, lazy loading, dimensions)

#### **🔗 Content SEO**
- Long-tail keywords per page
- Optimized titles (H1, H2 hierarchy)
- Rich and unique descriptions
- Internal linking structure
- Complete schema markup

### 🚀 Deployment

#### **Production Preparation**
1. **Project build**: `npm run build`
2. **Configure real domain** in SEOHead.jsx
3. **Update URLs** in sitemap.xml
4. **Configure SSL certificate**
5. **Setup Google Analytics 4**
6. **Register in Google Search Console**
7. **Create Google My Business profile**

#### **Recommended Hosting**
- **Vercel** (recommended for React)
- **Netlify** (excellent for SPAs)
- **DigitalOcean** (more control)

### 🎨 Customization

#### **Change Content**
- **Texts**: Modify files in `src/i18n/locales/`
- **Images**: Replace Unsplash URLs in components
- **Colors**: Update palette in `tailwind.config.js`
- **Restaurant data**: Edit information in structured data

#### **Add New Sections**
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Navbar.jsx`
4. Include in `sitemap.xml`

### 📈 Expected Results

#### **SEO Benefits**
- **Rich Snippets** in Google results
- **Local SEO** optimized for Granada
- **International SEO** for foreign tourists
- **Mobile-first** indexing optimized

#### **UX Benefits**
- **Fast loading** with Vite and lazy loading
- **Intuitive navigation** by routes
- **Perfect mobile responsive**
- **Improved accessibility**

### 🤝 Contributions

Want to improve the project? Contributions are welcome!

1. Fork the repository
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create a Pull Request

### 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

### 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/mitoperni)
- LinkedIn: [Your Profile](https://linkedin.com/in/migueltoyaspernichi)
---

## 📞 Contacto / Contact

**¿Necesitas una web similar para tu restaurante? / Need a similar website for your restaurant?**

📧 Email: tu-email@ejemplo.com
🌐 Web: [tu-portfolio.com](https://tu-portfolio.com)
💼 LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ **¡Dale una estrella si te ha gustado el proyecto! / Give it a star if you liked the project!**