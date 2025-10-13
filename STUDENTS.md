# 🎓 מדריך לתלמידים - Cato Dashboard

ברוכים הבאים לפרויקט Cato Dashboard! זהו פרויקט מתקדם של דשבורד ניהול עם טכנולוגיות מודרניות.

## 📋 תוכן עניינים

- [מבוא לפרויקט](#מבוא-לפרויקט)
- [התקנה והפעלה](#התקנה-והפעלה)
- [מבנה הפרויקט](#מבנה-הפרויקט)
- [איך לתרום](#איך-לתרום)
- [משימות לעבודה](#משימות-לעבודה)
- [משאבי למידה](#משאבי-למידה)

## 🚀 מבוא לפרויקט

### מה זה Cato Dashboard?

זהו דשבורד ניהול מתקדם הכולל:

- **🏠 Stories Overview Dashboard** - ניהול סיפורי אבטחה בזמן אמת
- **🔧 Split Tunnel Dashboard** - ניהול מדיניות רשת
- **📊 גרפים אינטראקטיביים** - ויזואליזציה של נתונים
- **🗺️ מפות עולמיות** - הצגת נתונים גיאוגרפיים
- **🎨 מערכת עיצוב** - רכיבים לשימוש חוזר

### טכנולוגיות בפרויקט

- **React 19.1.1** - ספריית UI מודרנית
- **TypeScript** - JavaScript עם טיפוסים
- **Material-UI 7.3.4** - רכיבי UI מוכנים
- **Recharts** - ספריית גרפים
- **React-Leaflet** - מפות אינטראקטיביות
- **Vite** - כלי בנייה מהיר

## ⚙️ התקנה והפעלה

### דרישות מוקדמות

- **Node.js** (גרסה 16 ומעלה)
- **npm** או **yarn**
- **Git** (לעבודה עם הקוד)

### שלבי התקנה

1. **שכפול הפרויקט:**
```bash
git clone https://github.com/danielboaron23/cato-dashboard.git
cd cato-dashboard
```

2. **התקנת תלויות:**
```bash
npm install
```

3. **הפעלת השרת:**
```bash
npm run dev
```

4. **פתיחת הדפדפן:**
```
http://localhost:5173
```

### פקודות נוספות

```bash
# בניית הפרויקט לייצור
npm run build

# בדיקת איכות קוד
npm run lint

# הפעלת Storybook
npm run storybook
```

## 📁 מבנה הפרויקט

```
cato-dashboard/
├── src/
│   ├── components/          # רכיבים לשימוש חוזר
│   │   └── dashboard/      # רכיבי דשבורד ספציפיים
│   ├── design-system/      # מערכת עיצוב
│   │   ├── components/     # רכיבי עיצוב
│   │   ├── theme/         # נושאים וצבעים
│   │   └── utils/         # כלי עזר
│   ├── pages/             # דפים ראשיים
│   │   ├── StoriesOverview.html
│   │   └── SplitTunnelDashboard.html
│   ├── mocks/             # נתונים לדוגמה
│   ├── styles/            # קבצי CSS
│   └── stories/           # Storybook
├── public/                # קבצים סטטיים
├── README.md             # תיעוד ראשי
├── STUDENTS.md           # מדריך זה
└── TASKS.md              # רשימת משימות
```

### רכיבי מערכת העיצוב

- **StatCard** - כרטיסי סטטיסטיקה
- **MetricWidget** - מיכלים לגרפים
- **DataTable** - טבלאות עם מיון
- **DonutChart** - גרפי דונאט
- **GaugeChart** - גרף סיכון
- **BadgePill** - תגיות צבעוניות

## 🤝 איך לתרום

### הגדרת Git

```bash
# הגדרת זהות
git config user.name "השם שלך"
git config user.email "האימייל שלך"
```

### תהליך העבודה

1. **עדכון הקוד:**
```bash
git pull origin main
```

2. **יצירת ענף חדש:**
```bash
git checkout -b feature/שם-המשימה
```

3. **עריכת קבצים** (בעזרת Cursor או עורך אחר)

4. **הוספת שינויים:**
```bash
git add .
git commit -m "תיאור השינוי"
```

5. **העלאה ל-GitHub:**
```bash
git push origin feature/שם-המשימה
```

### כללי כתיבת קוד

- **שמות משתנים** באנגלית
- **הערות** בעברית או אנגלית
- **קוד נקי** - רווחים וקפיצות שורה
- **טיפוסים** - השתמש ב-TypeScript

## 📝 משימות לעבודה

### משימות למתחילים

1. **לימוד הקוד:**
   - קרא את הקבצים ב-`src/components/`
   - הבן איך עובדים הרכיבים
   - הרץ את הפרויקט ובדוק את הפונקציונליות

2. **שיפורים קטנים:**
   - הוסף הערות לקוד
   - תקן שגיאות כתיב
   - שפר את העיצוב

### משימות מתקדמות

1. **תכונות חדשות:**
   - הוסף מצב לילה (Dark Mode)
   - צור גרף חדש
   - הוסף פילטרים לטבלאות

2. **שיפורי ביצועים:**
   - אופטימיזציה של רכיבים
   - שיפור זמן טעינה
   - הוספת lazy loading

3. **נגישות:**
   - הוסף תמיכה בקוראי מסך
   - שפר ניווט במקלדת
   - הוסף alt text לתמונות

## 📚 משאבי למידה

### React ו-TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material-UI Components](https://mui.com/material-ui/)

### כלים נוספים
- [Recharts Documentation](https://recharts.org/)
- [React-Leaflet](https://react-leaflet.js.org/)
- [Vite Guide](https://vitejs.dev/guide/)

### Git ו-GitHub
- [Git Tutorial](https://www.atlassian.com/git/tutorials)
- [GitHub Guides](https://guides.github.com/)

## 🆘 עזרה ותמיכה

### אם נתקעת:

1. **קרא את התיעוד** - README.md, STUDENTS.md
2. **חפש שגיאות** - בדוק את הקונסול בדפדפן
3. **שאל שאלות** - צור Issue ב-GitHub
4. **בדוק את הקוד** - השתמש ב-`npm run lint`

### דרכים ליצור קשר:

- **GitHub Issues** - לדיווח על באגים או בקשות תכונות
- **Discussions** - לשאלות כלליות
- **Email** - לשאלות פרטיות

## 🎯 יעדים למידה

בסוף העבודה על הפרויקט תוכלו:

- ✅ להבין איך עובד React עם TypeScript
- ✅ ליצור רכיבים מורכבים
- ✅ לעבוד עם ספריות חיצוניות
- ✅ לנהל פרויקט Git
- ✅ לכתוב קוד נקי ומתועד
- ✅ לעבוד בצוות על קוד משותף

## 🏆 טיפים להצלחה

1. **התחל קטן** - אל תנסה לעשות הכל בבת אחת
2. **תעד את הקוד** - כתוב הערות ברורות
3. **בדוק את העבודה** - הרץ את הפרויקט אחרי כל שינוי
4. **שאל שאלות** - אין שאלות טיפשיות
5. **למד מאחרים** - קרא קוד של תלמידים אחרים

---

**בהצלחה! 🚀**

*נכתב עבור תלמידי Cato Dashboard Project*
