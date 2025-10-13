# 🤝 מדריך תרומה לפרויקט

תודה על העניין שלך לתרום לפרויקט Cato Dashboard! מדריך זה יעזור לך להבין איך לתרום בצורה הטובה ביותר.

## 📋 תוכן עניינים

- [איך להתחיל](#איך-להתחיל)
- [תהליך העבודה](#תהליך-העבודה)
- [כללי כתיבת קוד](#כללי-כתיבת-קוד)
- [איך לדווח על באגים](#איך-לדווח-על-באגים)
- [איך לבקש תכונות חדשות](#איך-לבקש-תכונות-חדשות)
- [תהליך Review](#תהליך-review)

## 🚀 איך להתחיל

### 1. קבלת גישה לפרויקט

- **צור קשר עם מנהל הפרויקט** כדי לקבל גישה
- **קבל הזמנה** להיות Collaborator
- **קבל את ההזמנה** ב-GitHub

### 2. הגדרת הסביבה

```bash
# שכפול הפרויקט
git clone https://github.com/danielboaron23/cato-dashboard.git
cd cato-dashboard

# התקנת תלויות
npm install

# הפעלת השרת
npm run dev
```

### 3. הכרת הפרויקט

- **קרא את [STUDENTS.md](./STUDENTS.md)** - מדריך מקיף
- **בחר משימה מ-[TASKS.md](./TASKS.md)**
- **הבן את מבנה הפרויקט**

## 🔄 תהליך העבודה

### 1. עדכון הקוד

```bash
# מעבר לענף הראשי
git checkout main

# עדכון מהמאגר המרכזי
git pull origin main
```

### 2. יצירת ענף חדש

```bash
# יצירת ענף חדש (החלף את שם-המשימה)
git checkout -b feature/שם-המשימה

# או למתחילים
git checkout -b student/השם-שלך/תיאור-קצר
```

**דוגמאות לשמות ענפים:**
- `feature/dark-mode`
- `bugfix/navigation-issue`
- `student/john/add-new-chart`
- `improvement/performance-optimization`

### 3. עבודה על הקוד

- **ערוך קבצים** בעזרת Cursor או עורך אחר
- **בדוק את השינויים** - הרץ `npm run dev`
- **בדוק איכות קוד** - הרץ `npm run lint`

### 4. הוספת שינויים

```bash
# הוספת קבצים
git add .

# או הוספה סלקטיבית
git add src/components/NewComponent.tsx
```

### 5. יצירת Commit

```bash
git commit -m "תיאור קצר של השינוי

תיאור מפורט של מה שעשית:
- הוספתי רכיב חדש
- תיקנתי באג בניווט
- שיפרתי את הביצועים

פרטים נוספים אם נדרש..."
```

**כללי כתיבת Commit Messages:**
- **שורה ראשונה**: עד 50 תווים, תיאור קצר
- **שורה ריקה**
- **שורות נוספות**: הסבר מפורט (אופציונלי)
- **השתמש בעברית או אנגלית** - עקבי

### 6. העלאה ל-GitHub

```bash
# העלאה ל-GitHub
git push origin feature/שם-המשימה
```

### 7. יצירת Pull Request

1. **לך ל-GitHub** → הפרויקט
2. **לחץ על "Compare & pull request"**
3. **מלא את הפרטים:**
   - **Title**: תיאור קצר
   - **Description**: הסבר מפורט
   - **Assignees**: הוסף את עצמך
   - **Labels**: הוסף תוויות מתאימות

## 📝 כללי כתיבת קוד

### עקרונות כלליים

- **קוד נקי** - רווחים, קפיצות שורה, עקביות
- **שמות ברורים** - משתנים ופונקציות עם שמות מובנים
- **הערות** - הסבר מה הקוד עושה
- **טיפוסים** - השתמש ב-TypeScript

### מבנה קבצים

```
src/
├── components/          # רכיבים לשימוש חוזר
│   └── dashboard/      # רכיבי דשבורד
├── pages/             # דפים ראשיים
├── design-system/     # מערכת עיצוב
├── mocks/            # נתונים לדוגמה
└── styles/           # קבצי CSS
```

### כללי React

```typescript
// ✅ טוב
interface Props {
  title: string;
  count: number;
  onUpdate: (value: number) => void;
}

const MyComponent: React.FC<Props> = ({ title, count, onUpdate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>{count}</span>
    </div>
  );
};

// ❌ רע
const MyComponent = (props) => {
  return <div><h2>{props.title}</h2><span>{props.count}</span></div>;
};
```

### כללי CSS

```css
/* ✅ טוב - BEM naming */
.dashboard-card {
  padding: 20px;
  border-radius: 8px;
}

.dashboard-card__title {
  font-size: 18px;
  font-weight: 600;
}

.dashboard-card--highlighted {
  background-color: #f0f0f0;
}

/* ❌ רע */
.card {
  padding: 20px;
}

.title {
  font-size: 18px;
}
```

## 🐛 איך לדווח על באגים

### יצירת Issue

1. **לך ל-GitHub** → הפרויקט → Issues
2. **לחץ על "New issue"**
3. **בחר "Bug report"**
4. **מלא את הפרטים:**

```markdown
## תיאור הבאג
תיאור קצר של הבעיה

## איך לשחזר
1. לך ל-...
2. לחץ על...
3. ראה שגיאה

## התנהגות צפויה
מה היה צריך לקרות

## התנהגות בפועל
מה קרה בפועל

## Screenshots
הוסף תמונות אם רלוונטי

## מידע נוסף
- דפדפן: Chrome 91
- מערכת הפעלה: macOS
- גרסת הפרויקט: v1.0.0
```

## 💡 איך לבקש תכונות חדשות

### יצירת Feature Request

1. **לך ל-GitHub** → הפרויקט → Issues
2. **לחץ על "New issue"**
3. **בחר "Feature request"**
4. **מלא את הפרטים:**

```markdown
## תיאור התכונה
תיאור קצר של התכונה הרצויה

## בעיה שזה פותר
איזה בעיה התכונה פותרת?

## פתרון מוצע
איך אתה רואה שהתכונה תעבוד?

## חלופות
האם יש פתרונות אחרים?

## מידע נוסף
הוסף מידע נוסף אם רלוונטי
```

## 👀 תהליך Review

### לפני שליחת Pull Request

- [ ] **הקוד עובד** - הרץ `npm run dev` וודא שהכל עובד
- [ ] **אין שגיאות** - הרץ `npm run lint`
- [ ] **הקוד נקי** - בדוק רווחים, שמות משתנים
- [ ] **יש הערות** - הסבר מה הקוד עושה
- [ ] **נבדק בדפדפנים** - Chrome, Firefox, Safari
- [ ] **נבדק במובייל** - אם רלוונטי

### במהלך Review

- **היה פתוח לביקורת** - זה חלק מהתהליך
- **הגיב לביקורות** - הסבר או תקן
- **למד מהביקורות** - זה עוזר לך להשתפר
- **היה סבלני** - Review לוקח זמן

### אחרי Approval

- **מחק את הענף** אחרי merge
- **עדכן את הענף הראשי** - `git checkout main && git pull`
- **חגוג** - תרמת לפרויקט! 🎉

## 🏷️ Labels ו-Tags

### Labels לקבצים

- **bug** - באג שצריך תיקון
- **enhancement** - שיפור או תכונה חדשה
- **documentation** - תיעוד
- **good first issue** - טוב למתחילים
- **help wanted** - צריך עזרה
- **question** - שאלה

### Labels ל-Pull Requests

- **ready for review** - מוכן לבדיקה
- **work in progress** - עדיין בעבודה
- **needs testing** - צריך בדיקות
- **breaking change** - שינוי משמעותי

## 📞 עזרה ותמיכה

### אם נתקעת

1. **קרא את התיעוד** - README, STUDENTS, TASKS
2. **חפש ב-Issues** - אולי מישהו כבר שאל
3. **צור Issue חדש** - שאל שאלה
4. **צור קשר עם מנהל הפרויקט**

### משאבי עזרה

- **GitHub Documentation** - [docs.github.com](https://docs.github.com)
- **React Documentation** - [react.dev](https://react.dev)
- **TypeScript Handbook** - [typescriptlang.org](https://www.typescriptlang.org)

## 🎯 טיפים להצלחה

1. **התחל קטן** - אל תנסה לעשות הכל בבת אחת
2. **תקשר** - שאל שאלות, הסבר מה אתה עושה
3. **למד מאחרים** - קרא קוד של תלמידים אחרים
4. **היה עקבי** - עקוב אחרי הכללים
5. **התמד** - תרומה לפרויקט לוקחת זמן

## 🏆 הכרה

כל תרומה חשובה! בין אם זה:
- תיקון באג קטן
- הוספת תכונה גדולה
- שיפור תיעוד
- עזרה לתלמידים אחרים

**תודה על התרומה שלך! 🙏**

---

*נכתב עבור תלמידי Cato Dashboard Project*
