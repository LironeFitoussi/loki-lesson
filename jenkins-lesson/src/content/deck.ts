import type { DeckMeta, Slide } from '../slides/types'

export const meta: DeckMeta = {
  title: 'Jenkins: אוטומציה ל-DevOps',
  author: {
    name: 'Lirone Fitoussi',
    role: 'Full Stack | IT | DevOps | Automations',
    githubUrl: '#',
  },
}

export const slides: Slide[] = [
  {
    type: 'cover',
    title: 'Jenkins: אוטומציה ל-DevOps',
  },

  {
    type: 'section',
    title: 'למה בכלל צריך Jenkins?',
    intro: 'לפני שמדברים על הכלי, כדאי להבין איזו בעיה הוא פותר',
  },

  {
    type: 'content',
    title: 'כל שינוי בקוד דורש עבודה חוזרת',
    html: `<p>נניח שיש לכם אפליקציה, ומדי יום מפתחים דוחפים שינויים חדשים לקוד. כל שינוי כזה צריך: לבנות מחדש, להריץ בדיקות, לארוז, ולפרוס. אם עושים את זה ידנית בכל commit, מהר מאוד זה הופך לעבודה חוזרת ומשעממת.</p><ul><li>בנייה מחדש של הקוד</li><li>הרצת בדיקות</li><li>אריזה לגרסה חדשה</li><li>פריסה לסביבה</li></ul>`,
  },

  {
    type: 'content',
    title: 'עבודה ידנית לא מתקנת',
    html: `<p>ככל שיש יותר מפתחים ויותר commits, אי אפשר להמשיך לעשות את התהליך הזה ביד בכל פעם. זה גוזל זמן יקר, ופתוח לטעויות אנוש - מפתח ששוכח להריץ בדיקה, או מדלג על שלב בטעות.</p><ul><li>לוקח זמן</li><li>קל לטעות</li><li>לא מתקנן כשהצוות גדל</li></ul><p class="content-slide__prompt">שאלת מעבר: איך גורמים לתהליך הזה לקרות לבד?</p>`,
  },

  {
    type: 'content',
    title: 'הפתרון: אוטומציה',
    html: `<p>הפתרון הוא כלי שירוץ את כל התהליך הזה בשבילכם, אוטומטית, בכל פעם שמישהו מבצע שינוי. הכלי הזה נקרא <strong>Jenkins</strong>.</p><ul><li>Jenkins הוא פלטפורמת אוטומציה</li><li>בונה, בודק ופורס תוכנה</li><li>רץ אוטומטית לפי אירועים</li></ul>`,
  },

  {
    type: 'content',
    title: 'Jenkins לא מוגבל רק לקוד',
    html: `<p>Jenkins לא עוצר בבנייה ופריסה של אפליקציות. אפשר להשתמש בו כדי להריץ כל משימה שרוצים לאוטומט - סקריפטים, playbooks, כל דבר שאפשר להריץ מהטרמינל.</p><ul><li>סקריפטים ב-Bash</li><li>סקריפטים ב-Python</li><li>Ansible Playbooks</li></ul>`,
  },

  {
    type: 'content',
    title: 'מיומנות מבוקשת מאוד',
    html: `<p>מעבר לזה ש-Jenkins חוסך זמן, זו מיומנות שמאוד מבוקשת בעולם ה-DevOps. מהנדסים עם ידע ב-Jenkins יכולים להרוויח בין 150,000 ל-250,000 דולר בשנה.</p><p class="content-slide__prompt">שאלת מעבר: אז מה זה בעצם Jenkins, ואיך הוא עובד מבפנים?</p>`,
  },

  {
    type: 'section',
    title: 'מה זה Jenkins?',
    intro: 'הגדרה קצרה, בלי לקרוא תיעוד שלם',
  },

  {
    type: 'content',
    title: 'Jenkins בשורה אחת',
    html: `<p>Jenkins הוא פלטפורמת אוטומציה שמאפשרת לבנות, לבדוק ולפרוס תוכנה באמצעות <strong>Pipelines</strong>. את התהליכים האלה מגדירים דרך ממשק ווב נוח.</p><ul><li>ממשק Web GUI</li><li>יצירת Jobs</li><li>הרצה לפי דרישה או אוטומטית</li></ul>`,
  },

  {
    type: 'content',
    title: 'מה אפשר להגדיר ב-Job?',
    html: `<p>לכל Job אפשר להגדיר איך הוא מתחבר למקור הקוד, מה קורה לפני ואחרי הבנייה, ומתי הוא בכלל אמור לרוץ.</p><ul><li>Source Control Management (למשל Git)</li><li>Pre-build ו-Post-build Actions</li><li>Build Triggers</li></ul>`,
  },

  {
    type: 'content',
    title: 'איך מפעילים Job?',
    html: `<p>אפשר להריץ Job בשתי דרכים: בלחיצת כפתור ידנית, או אוטומטית באמצעות Webhook - למשל בכל פעם שמפתח דוחף קוד ל-repository.</p><ul><li>הרצה ידנית מהממשק</li><li>הרצה אוטומטית דרך Webhook</li></ul><p class="content-slide__prompt">שאלת מעבר: מי בפועל מריץ את ה-build הזה?</p>`,
  },

  {
    type: 'section',
    title: 'תשתית Jenkins: Master ו-Agents',
    intro: 'התשתית פשוטה יותר משנדמה',
  },

  {
    type: 'content',
    title: 'שני חלקים בתשתית',
    html: `<p>תשתית Jenkins מורכבת משני חלקים עיקריים. ה-<strong>Master</strong> שולט בפייפליינים ומתזמן בנייה, וה-<strong>Agents</strong> הם אלו שבפועל מריצים את הבנייה בתוך ה-workspace שלהם.</p><ul><li>Master - שולט ומתזמן</li><li>Agent - מריץ את ה-build בפועל</li></ul>`,
  },

  {
    type: 'content',
    title: 'איך זה זורם בפועל?',
    html: `<p>נניח שמפתח מבצע commit לקוד ב-repository. ה-Master מזהה את השינוי, מפעיל את ה-Pipeline המתאים, ומחלק את הבנייה ל-Agent שיריץ אותה.</p>`,
    code: {
      language: 'text',
      content:
        'Developer commit\n  -> Jenkins Master מזהה שינוי\n  -> Pipeline מופעל\n  -> Build מחולק ל-Agent',
    },
  },

  {
    type: 'content',
    title: 'איך בוחרים באיזה Agent להריץ?',
    html: `<p>ה-Master לא בוחר Agent באקראי. הוא בוחר לפי <strong>Labels</strong> שמגדירים דרך ה-UI של Jenkins - כך אפשר לוודא שהבנייה רצה על agent שיש לו את הכלים הנכונים.</p><ul><li>כל Agent מקבל Labels</li><li>ה-Pipeline מבקש Agent עם Label מסוים</li><li>ה-Master מתאים ביניהם</li></ul><p class="content-slide__prompt">שאלת מעבר: מאיפה בכלל מגיע ה-Agent הזה?</p>`,
  },

  {
    type: 'section',
    title: 'סוגי Agents: Permanent מול Cloud',
    intro: 'לא כל ה-Agents נוצרו שווים',
  },

  {
    type: 'content',
    title: 'Permanent Agents - שרתים קבועים',
    html: `<p>הסוג הראשון הוא <strong>Permanent Node Agents</strong>. תחשבו עליהם כמו שרתי Linux או Windows רגילים שמוגדרים להריץ jobs של Jenkins. אין בהם קסם מיוחד - הם פשוט שרתים.</p><ul><li>נדרש Java מותקן</li><li>נדרש SSH מוגדר (ה-Master מתחבר דרכו)</li><li>נדרשים כלי הבנייה הרלוונטיים מותקנים</li></ul>`,
  },

  {
    type: 'content',
    title: 'Cloud Agents - הבחירה הנפוצה',
    html: `<p>הסוג השני, והנפוץ הרבה יותר בסביבות אמיתיות, הוא <strong>Cloud Agents</strong>. כאן Jenkins לא מחכה לשרת קבוע - הוא מקים Agent דינמית, לפי תבנית (Template) שמגדירים מראש.</p><ul><li>Docker</li><li>Kubernetes</li><li>AWS EC2 Fleet</li></ul>`,
  },

  {
    type: 'content',
    title: 'למה Cloud Agents פופולריים יותר?',
    html: `<p>במקום לתחזק שרת שיושב פנוי רוב הזמן, Jenkins יכול להקים Container, Pod או מכונת EC2 רק כשיש בנייה שצריך להריץ, ולסגור אותם כשסיימו.</p><ul><li>אין שרת שמחכה בחוסר עשייה</li><li>קנה מידה גמיש לפי עומס</li><li>סביבת build נקייה בכל פעם</li></ul><p class="content-slide__prompt">שאלת מעבר: איך זה נראה בפועל?</p>`,
  },

  {
    type: 'content',
    title: 'מה נראה בהמשך במעבדה',
    html: `<p>בחלק המעשי של הקורס נגדיר את Docker כ-Cloud Agent - כך שכל Job של Jenkins ירוץ בתוך Container שנוצר דינמית. העיקרון דומה מאוד להגדרת Kubernetes או EC2 Fleet כ-Agent - רק ה-Template משתנה.</p><ul><li>Docker -> Container דינמי</li><li>Kubernetes -> Pod דינמי</li><li>EC2 Fleet -> מכונה דינמית</li></ul><p class="content-slide__prompt">שאלת מעבר: אחרי שיש לנו Agents, איך בעצם מגדירים את העבודה שהם צריכים להריץ?</p>`,
  },

  {
    type: 'section',
    title: 'סוגי Build Jobs',
    intro: 'שתי דרכים עיקריות להגדיר עבודה ב-Jenkins',
  },

  {
    type: 'content',
    title: 'Freestyle Projects - הדרך הפשוטה',
    html: `<p>הדרך הפשוטה ביותר להתחיל עם Jenkins היא <strong>Freestyle Project</strong>. תחשבו עליו כמו סקריפט Shell שרץ על שרת, ומופעל על ידי אירוע מסוים - למשל commit של מפתח ל-GitHub.</p><ul><li>מוגדר כולו דרך ה-UI</li><li>נשען הרבה על Plugins</li><li>ברוב המקרים - פשוט מריץ Shell Script</li></ul>`,
  },

  {
    type: 'content',
    title: 'איך נראה Build Step ב-Freestyle?',
    html: `<p>ב-Freestyle Project, תחת "Build Steps" בוחרים "Execute shell" וכותבים פקודות רגילות, בדיוק כמו שהייתם מריצים אותן בטרמינל על השרת.</p>`,
    code: {
      language: 'bash',
      content: '#!/bin/bash\nnpm install\nnpm run build\nnpm test',
    },
  },

  {
    type: 'content',
    title: 'למה להתחיל דווקא מ-Freestyle?',
    html: `<p>Freestyle Projects הם נקודת הכניסה המומלצת ללמידת Jenkins - אם אתם מכירים Shell או שורת פקודה של Linux, כבר יש לכם את מה שצריך כדי להתחיל.</p><p class="content-slide__prompt">שאלת מעבר: אבל מה קורה כשהתהליך מורכב יותר ומורכב מכמה שלבים ברורים?</p>`,
  },

  {
    type: 'section',
    title: 'Pipelines ו-Stages',
    intro: 'כשצריך תהליך מובנה עם שלבים ברורים',
  },

  {
    type: 'content',
    title: 'Pipeline - קובץ שמתאר את התהליך',
    html: `<p>הסגנון השני הוא <strong>Pipeline</strong>. במקום להגדיר הכל דרך ה-UI, כותבים <strong>Jenkinsfile</strong> בשפת <strong>Groovy</strong> שמתאר בדיוק מה קורה בכל שלב של הבנייה.</p><ul><li>נכתב כקוד (Jenkinsfile)</li><li>שפת Groovy</li><li>ניתן לשמור בבקרת גרסאות יחד עם הקוד</li></ul>`,
  },

  {
    type: 'content',
    title: 'איך נראה Jenkinsfile בסיסי?',
    html: `<p>כל Jenkinsfile מתחיל מאותו שלד: בלוק <strong>pipeline</strong>, הגדרת <strong>agent</strong> שירוץ עליו, ובתוכו <strong>stages</strong> שמכילים <strong>stage</strong> אחד או יותר, וכל stage מכיל <strong>steps</strong> - הפקודות שבאמת רצות.</p>`,
    code: {
      language: 'groovy',
      content:
        "pipeline {\n    agent any\n\n    stages {\n        stage('Build') {\n            steps {\n                sh 'echo Building...'\n            }\n        }\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'Pipeline מתחלק ל-Stages',
    html: `<p>פייפליין בדרך כלל מתחלק למספר <strong>Stages</strong> ברורים. השלבים יכולים להשתנות בין פרויקטים, אבל יש זרימה נפוצה מאוד שחוזרת על עצמה.</p>`,
    code: {
      language: 'text',
      content: 'Clone -> Build -> Test -> Package -> Deploy',
    },
  },

  {
    type: 'content',
    title: 'שלב Clone',
    html: `<p>בשלב ה-<strong>Clone</strong>, מושכים את הקוד מה-repository ומכינים את הסביבה המקומית על ה-Agent - זו נקודת ההתחלה של כל בנייה.</p>`,
    code: {
      language: 'groovy',
      content:
        "stage('Clone') {\n    steps {\n        git branch: 'main', url: 'https://github.com/example/app.git'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'שלב Build',
    html: `<p>בשלב ה-<strong>Build</strong>, לוקחים את הקוד ובונים אותו. בדרך כלל זה אומר יצירת artifact מקומי - קובץ jar, קובץ הרצה, או Container Image.</p>`,
    code: {
      language: 'groovy',
      content: "stage('Build') {\n    steps {\n        sh 'mvn clean package'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'שלב Test',
    html: `<p>בשלב ה-<strong>Test</strong>, מריצים בדיקות מול הקוד שזה עתה נבנה - כדי לוודא שהשינוי לא שבר שום דבר לפני שהוא ממשיך הלאה.</p>`,
    code: {
      language: 'groovy',
      content: "stage('Test') {\n    steps {\n        sh 'mvn test'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'שלב Package',
    html: `<p>בשלב ה-<strong>Package</strong>, אורזים את הקוד כך שיהיה מוכן להפצה - למשל בונים ממנו Docker Image עם תג לפי מספר ה-build.</p>`,
    code: {
      language: 'groovy',
      content:
        "stage('Package') {\n    steps {\n        sh 'docker build -t myapp:${BUILD_NUMBER} .'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'שלב Deploy',
    html: `<p>בשלב ה-<strong>Deploy</strong>, שולחים את ה-artifact ל-registry - למשל, דוחפים את ה-Docker Image שנבנה החוצה, ל-Docker Hub.</p>`,
    code: {
      language: 'groovy',
      content:
        "stage('Deploy') {\n    steps {\n        sh 'docker push myrepo/myapp:${BUILD_NUMBER}'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'כל השלבים ביחד: ה-Jenkinsfile המלא',
    html: `<p>כשמחברים את כל השלבים לקובץ אחד, מקבלים Jenkinsfile שלם. הקובץ הזה יושב בשורש ה-repository, ו-Jenkins קורא אותו ומריץ אותו stage אחרי stage בכל build.</p>`,
    code: {
      language: 'groovy',
      content:
        "pipeline {\n    agent any\n\n    stages {\n        stage('Clone') {\n            steps {\n                git branch: 'main', url: 'https://github.com/example/app.git'\n            }\n        }\n        stage('Build') {\n            steps {\n                sh 'mvn clean package'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh 'mvn test'\n            }\n        }\n        stage('Package') {\n            steps {\n                sh 'docker build -t myapp:${BUILD_NUMBER} .'\n            }\n        }\n        stage('Deploy') {\n            steps {\n                sh 'docker push myrepo/myapp:${BUILD_NUMBER}'\n            }\n        }\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'אז מה Jenkins באמת עושה?',
    html: `<p>בסופו של דבר, Jenkins הוא דרך לאוטומט את העבודה שמפתחים לא רוצים לעשות ידנית, כדי שיוכלו לחסוך זמן ולהתמקד בדברים פרודוקטיביים יותר.</p><p class="content-slide__prompt">שאלת מעבר: מספיק תיאוריה - מוכנים לראות את זה חי?</p>`,
  },

  {
    type: 'section',
    title: 'הזמן לראות את זה בפועל',
    intro: 'עכשיו עוברים למעבדה ומקימים שרת Jenkins משלנו',
  },

  {
    type: 'section',
    title: 'התקנת Jenkins עם Docker',
    intro: 'הדרך המומלצת להריץ שרת Jenkins',
  },

  {
    type: 'content',
    title: 'איך מתקינים Jenkins?',
    html: `<p>יש שתי דרכים עיקריות להתקין Jenkins: ישירות על מערכת ההפעלה, או בתוך container - למשל ב-Docker או ב-Kubernetes. באתר הרשמי של Jenkins, השיטה המומלצת היא Docker, וזו גם השיטה שנשתמש בה.</p><ul><li>התקנה ישירה על ה-OS</li><li>הרצה כ-Container (מומלץ)</li></ul>`,
  },

  {
    type: 'content',
    title: 'שלושה שלבים להתקנה',
    html: `<p>ההתקנה עם Docker מורכבת משלושה שלבים ברורים. נעבור על כל אחד מהם בנפרד, עם הפקודות המדויקות.</p>`,
    code: {
      language: 'text',
      content: '1. Build the Docker image\n2. Create a network בשם jenkins\n3. Run the container',
    },
  },

  {
    type: 'content',
    title: 'שלב 1: בניית ה-Docker Image',
    html: `<p>ה-Dockerfile מושך את ה-image הרשמי של Jenkins, ומתקין עליו גם את <strong>Blue Ocean</strong> - תוסף פופולרי שהופך את התצוגה של ה-Pipelines להרבה יותר ברורה ונוחה לניפוי תקלות.</p>`,
    code: {
      language: 'dockerfile',
      content:
        'FROM jenkins/jenkins:2.462.2-jdk17\nUSER root\nRUN apt-get update && apt-get install -y docker-ce-cli\nUSER jenkins\nRUN jenkins-plugin-cli --plugins "blueocean docker-workflow"',
    },
  },

  {
    type: 'content',
    title: 'בונים את ה-Image',
    html: `<p>אחרי שיש לנו את ה-Dockerfile, מריצים <strong>docker build</strong> כדי לבנות ממנו image מקומי. הפקודה מורידה את ה-image הבסיסי של Jenkins ומתקינה עליו את התוספים - זה יכול לקחת כמה דקות, תלוי במהירות האינטרנט.</p>`,
    code: {
      language: 'bash',
      content: 'git clone https://github.com/example/jenkins-docker.git\ncd jenkins-docker\ndocker build -t myjenkins-blueocean:2.462.2-1 .',
    },
  },

  {
    type: 'content',
    title: 'שלב 2: יצירת Network',
    html: `<p>ל-Jenkins צריך Docker network משלו, כדי שהוא יוכל לתקשר עם containers נוספים (למשל agents) בצורה מבודדת ובטוחה.</p>`,
    code: {
      language: 'bash',
      content: 'docker network create jenkins\n\n# אימות שה-network נוצר:\ndocker network ls',
    },
  },

  {
    type: 'content',
    title: 'שלב 3: הרצת הקונטיינר',
    html: `<p>עכשיו מריצים את הקונטיינר בפועל. שימו לב לכל החלקים בפקודה: חיבור ל-network של jenkins, משתני סביבה שמצביעים על מיקום ה-certificates וגרסת ה-TLS, כמה volumes ממופים לשמירת המידע, והפורטים שנחשפים החוצה.</p>`,
    code: {
      language: 'bash',
      content:
        'docker run --name jenkins-blueocean --restart=on-failure --detach \\\n  --network jenkins \\\n  --env DOCKER_HOST=tcp://docker:2376 \\\n  --env DOCKER_CERT_PATH=/certs/client \\\n  --env DOCKER_TLS_VERIFY=1 \\\n  --volume jenkins-data:/var/jenkins_home \\\n  --volume jenkins-docker-certs:/certs/client:ro \\\n  --publish 8080:8080 --publish 50000:50000 \\\n  myjenkins-blueocean:2.462.2-1',
    },
  },

  {
    type: 'content',
    title: 'בדיקה שהקונטיינר רץ',
    html: `<p>בודקים עם <strong>docker ps</strong> שהקונטיינר אכן רץ, ושהוא מאזין על פורט 8080. אם רואים אותו ברשימה - אפשר לפתוח דפדפן ולגשת אליו.</p><p class="content-slide__prompt">שאלת מעבר: מה קורה כשפותחים את Jenkins בפעם הראשונה?</p>`,
    code: {
      language: 'bash',
      content: 'docker ps\n\nCONTAINER ID   IMAGE                          PORTS\nabc123def456   myjenkins-blueocean:2.462.2-1  0.0.0.0:8080->8080/tcp',
    },
  },

  {
    type: 'section',
    title: 'שחרור Jenkins והגדרה ראשונית',
    intro: 'הפעם הראשונה שפותחים את הדפדפן מול השרת',
  },

  {
    type: 'content',
    title: 'Unlock Jenkins',
    html: `<p>הדבר הראשון שרואים כשפותחים אינסטנס Jenkins חדש הוא מסך <strong>Unlock Jenkins</strong>. הוא מבקש סיסמת מנהל, שנוצרה אוטומטית ונשמרת בקובץ בתוך השרת.</p>`,
  },

  {
    type: 'content',
    title: 'איך מוציאים את הסיסמה מהקונטיינר?',
    html: `<p>מכיוון ש-Jenkins רץ בתוך container, כדי לקרוא את הקובץ עם הסיסמה צריך להשתמש ב-<strong>docker exec</strong> ולהריץ בתוכו את הפקודה שמדפיסה את התוכן שלו.</p>`,
    code: {
      language: 'bash',
      content: 'docker exec jenkins-blueocean cat /var/jenkins_home/secrets/initialAdminPassword',
    },
  },

  {
    type: 'content',
    title: 'התקנת Plugins מומלצים',
    html: `<p>אחרי הכנסת הסיסמה, Jenkins מציע להתקין <strong>Suggested Plugins</strong> - חבילת התוספים הפופולריים ביותר, כמו Ant ו-Gradle. זו הדרך הכי מהירה להתחיל, וזה מה שנבחר.</p>`,
  },

  {
    type: 'content',
    title: 'יצירת משתמש ראשון',
    html: `<p>בשלב <strong>Create First Admin User</strong> ממלאים את הפרטים האישיים - שם משתמש, סיסמה, שם מלא ואימייל - ולוחצים Save and Continue.</p>`,
  },

  {
    type: 'content',
    title: 'הגדרות אינסטנס וסיום',
    html: `<p>במסך ה-Instance Configuration אפשר פשוט להשאיר את ברירת המחדל וללחוץ Save and Finish. עם זה, ה-Setup Wizard מסתיים ו-Jenkins מוכן לשימוש.</p><p class="content-slide__prompt">שאלת מעבר: איך נראה הממשק שאיתו נעבוד מעכשיו?</p>`,
  },

  {
    type: 'section',
    title: 'סיור ב-Jenkins UI',
    intro: 'הכרות עם המסך הראשי לפני שמתחילים לעבוד',
  },

  {
    type: 'content',
    title: 'Breadcrumbs וניווט',
    html: `<p>בראש המסך נמצאים ה-<strong>Breadcrumbs</strong> - שביל הפירורים שמראה איפה אתם נמצאים בתוך המבנה של Jenkins, ומאפשר לנווט בין רמות בקלות. זה משהו שתשתמשו בו הרבה בניהול Jobs.</p>`,
  },

  {
    type: 'content',
    title: 'New Item',
    html: `<p><strong>New Item</strong> הוא המקום שבו יוצרים Job חדש - בין אם זה Freestyle Project או Pipeline. ניכנס לכאן בקרוב כדי ליצור את ה-Job הראשון שלנו.</p>`,
  },

  {
    type: 'content',
    title: 'People ו-Build History',
    html: `<p><strong>People</strong> הוא המקום שבו מנהלים חשבונות משתמשים. <strong>Build History</strong> מציג היסטוריה של כל ה-Jobs שרצו - שימושי מאוד כשרוצים להבין מה קרה בהרצות קודמות.</p><ul><li>People - ניהול משתמשים</li><li>Build History - היסטוריית הרצות</li></ul>`,
  },

  {
    type: 'content',
    title: 'Manage Jenkins',
    html: `<p><strong>Manage Jenkins</strong> הוא מרכז השליטה של השרת - כאן מגדירים Agents, מתקינים Plugins, ומנהלים כמעט כל הגדרה אחרת של Jenkins. ניכנס לכאן לעומק בעוד רגע.</p>`,
  },

  {
    type: 'content',
    title: 'My Views ו-Blue Ocean',
    html: `<p><strong>My Views / New View</strong> מאפשרים לארגן את ה-Jobs בצורה נוחה. <strong>Blue Ocean</strong> הוא התוסף שהתקנו קודם - הוא נותן תצוגה משודרגת ל-Pipelines. אחרי שניצור Pipeline, נשווה בין התצוגה הרגילה לתצוגה של Blue Ocean.</p><p class="content-slide__prompt">שאלת מעבר: מה בדיוק יש בתוך Manage Jenkins?</p>`,
  },

  {
    type: 'section',
    title: 'סיור ב-Manage Jenkins',
    intro: 'מרכז השליטה שכל מנהל Jenkins חייב להכיר',
  },

  {
    type: 'content',
    title: 'התראות בראש המסך',
    html: `<p>בראש עמוד Manage Jenkins בדרך כלל רואים התראות. אחת נפוצה מזהירה שהרצת Jobs על ה-<strong>Built-in Node</strong> (כלומר על ה-Master עצמו) מהווה סיכון אבטחה - כי עדיין לא הגדרנו Agents. התראה נוספת נפוצה מבקשת לעדכן Plugin.</p><ul><li>אזהרת הרצה על ה-Master</li><li>אזהרת Plugin שדורש עדכון</li></ul>`,
  },

  {
    type: 'content',
    title: 'Configure System',
    html: `<p><strong>Configure System</strong> מרכז את רוב ההגדרות הגלובליות של שרת Jenkins - כאן תבלו זמן לא מבוטל כמנהלי מערכת.</p>`,
  },

  {
    type: 'content',
    title: 'Manage Plugins',
    html: `<p>Jenkins הוא מפלצת של Plugins. חברות מתקינות Plugins, מפתחים מתקינים Plugins, ועם הזמן שדרוגים גורמים ל-Plugins להתנגש אחד בשני. <strong>Manage Plugins</strong> הוא המקום שבו מנהלים, מעדכנים ופותרים את כל זה - ותבלו שם הרבה זמן.</p>`,
  },

  {
    type: 'content',
    title: 'Manage Nodes and Clouds',
    html: `<p>כאן מגדירים את כל מה שקשור ל-Agents - Permanent Nodes, וגם Clouds כמו Kubernetes, Docker ו-AWS. כל דבר שקשור להרחבת כוח החישוב של Jenkins נמצא כאן.</p>`,
  },

  {
    type: 'content',
    title: 'אבטחה: Security, Users, Credentials',
    html: `<p>בקטע האבטחה יש שלושה חלקים עיקריים: הגדרות אבטחה גלובליות, ניהול משתמשים, ו-<strong>Manage Credentials</strong> - שם שומרים SSH keys או API tokens. אפשר גם להשתמש בפתרון חיצוני כמו AWS Secrets, אבל Jenkins מגיע עם מנהל credentials מובנה משלו.</p><ul><li>Configure Global Security</li><li>Manage Users</li><li>Manage Credentials (SSH keys, API tokens)</li></ul>`,
  },

  {
    type: 'content',
    title: 'Prepare for Shutdown',
    html: `<p>בתחתית העמוד יש כלים לתחזוקה. <strong>Prepare for Shutdown</strong> הוא הכלי שמשתמשים בו לפני שמורידים את שרת Jenkins לתחזוקה. הוא לא מפעיל Jobs חדשים, אבל נותן ל-Jobs הרצים כרגע לסיים - כדי לא לקטוע עבודה באמצע.</p><ul><li>לא מתחיל Jobs חדשים</li><li>מאפשר ל-Jobs קיימים לסיים</li><li>הדרך הבטוחה לכבות את השרת</li></ul><p class="content-slide__prompt">שאלת מעבר: אחרי שהכרנו את השרת, מוכנים ליצור את ה-Job הראשון שלנו?</p>`,
  },

  {
    type: 'section',
    title: 'ה-Freestyle Job הראשון שלנו',
    intro: 'Dashboard -> New Item',
  },

  {
    type: 'content',
    title: 'New Item - שני סוגי Jobs עיקריים',
    html: `<p>ב-New Item רואים כמה סוגי Jobs, אבל שניים מהם הם אלה שבאמת נשתמש בהם: <strong>Freestyle Project</strong> ו-<strong>Pipeline</strong>. Pipeline הוא הסגנון המתקדם עם Groovy, אליו נגיע בהמשך. Freestyle הוא נקודת ההתחלה - ואם אתם עובדים כ-Jenkins Administrator או עושים ייעוץ, תיתקלו בו המון.</p>`,
  },

  {
    type: 'content',
    title: 'איך קוראים ל-Job?',
    html: `<p>חשוב: אל תשתמשו ברווחים בשם ה-Job. הסיבה היא ש-Jenkins יוצר מאחורי הקלעים תיקייה על שם ה-Job בדיוק כפי שכתבתם אותו. במקום רווח, השתמשו ב-underscore או במקף.</p>`,
    code: {
      language: 'text',
      content: 'לא טוב:   my first job\nטוב:      my_first_job',
    },
  },

  {
    type: 'content',
    title: 'הגדרות עיקריות ב-Freestyle Project',
    html: `<p>אחרי שיוצרים את ה-Job, נכנסים למסך ההגדרות שלו. יש כמה קטגוריות עיקריות שכדאי להכיר לפני שנתחיל לבנות.</p><ul><li>Source Control Management</li><li>Build Triggers</li><li>Build Environment</li><li>Build Steps</li><li>Post-build Actions</li></ul>`,
  },

  {
    type: 'content',
    title: 'Source Control Management',
    html: `<p>כמעט תמיד תשתמשו כאן ב-<strong>Git</strong> ותכניסו את כתובת ה-repository. Jenkins ימשוך את הקוד מה-repository הזה ישירות אל תוך ה-workspace של ה-Job.</p>`,
  },

  {
    type: 'content',
    title: 'Build Triggers - מה מפעיל את ה-Job?',
    html: `<p>יש כמה דרכים נפוצות להפעיל Job. האפשרות הפופולרית ביותר היא ש-GitHub ישלח <strong>Webhook</strong> לשרת Jenkins. הבעיה: אם Jenkins נמצא מאחורי Firewall, צריך לפתוח פורטים או להשתמש ב-proxy כדי שה-Webhook יגיע.</p><ul><li>Webhook מ-GitHub (הכי נפוץ)</li><li>Poll SCM - Jenkins בודק ביוזמתו אם היה שינוי</li><li>Build periodically - כמו Cron רגיל</li></ul>`,
  },

  {
    type: 'content',
    title: 'Poll SCM ו-Build Periodically',
    html: `<p>אם ה-Webhook לא יכול להגיע לשרת, <strong>Poll SCM</strong> הוא הדרך לעקוף את זה - Jenkins יוצא בעצמו ל-GitHub ובודק לפי לוח זמנים אם היה שינוי. <strong>Build periodically</strong> דומה, אבל לא בודק שינויים - הוא פשוט מריץ build בזמנים קבועים, בדיוק כמו Cron Job.</p>`,
    code: {
      language: 'text',
      content: 'H/5 * * * *\n‏# בודק (או מריץ) כל 5 דקות, בפורמט של Cron',
    },
  },

  {
    type: 'content',
    title: 'Build Environment - Clean Workspace',
    html: `<p>אפשרות פופולרית תחת Build Environment היא <strong>Delete workspace before build starts</strong>. זה מוחק כל artifact שנשאר מריצה קודמת, ומבטיח שהבנייה תתחיל תמיד מסביבה נקייה.</p>`,
  },

  {
    type: 'content',
    title: 'Build Steps ו-Post-build Actions',
    html: `<p>ה-<strong>Build Steps</strong> הם השלבים שבפועל רצים - הכי נפוץ הוא <strong>Execute shell</strong>, ממש כמו סקריפט Bash. ה-<strong>Post-build Actions</strong> קורים אחרי שהבנייה נגמרת - למשל שליחת מייל, או הודעה ל-Slack דרך plugin מתאים.</p><ul><li>Build Steps - מה שרץ בפועל</li><li>Post-build Actions - מה קורה אחרי הסיום</li></ul>`,
  },

  {
    type: 'content',
    title: 'ה-Build הראשון: Hello World',
    html: `<p>ננסה את הדבר הכי פשוט שאפשר: Execute shell עם echo אחד. שומרים, ולוחצים Build Now.</p>`,
    code: {
      language: 'bash',
      content: 'echo "Hello World"',
    },
  },

  {
    type: 'content',
    title: 'כשמשהו נכשל',
    html: `<p>ריצה ראשונה נכשלה - כי השארנו את ה-Source Control Management מוגדר ל-Git בלי כתובת repository. הפתרון: חוזרים ל-Configure ומגדירים SCM בתור <strong>None</strong>, כי אין לנו כרגע קוד למשוך. שומרים, מריצים שוב - והפעם ה-Job מצליח ומדפיס Hello World.</p><p class="content-slide__prompt">שאלת מעבר: מעבר להדפסת טקסט קבוע, איך משתמשים במידע דינמי מתוך ה-Job עצמו?</p>`,
  },

  {
    type: 'section',
    title: 'משתני סביבה ב-Jenkins',
    intro: 'מידע דינמי שכל Job מקבל אוטומטית',
  },

  {
    type: 'content',
    title: 'Environment Variables הזמינים',
    html: `<p>בתוך מסך ה-Configure יש קישור "See List of Available Environment Variables" שפותח דף עם כל המשתנים שאפשר להשתמש בהם בתוך ה-Build Steps. שווה להכיר אותו - תשתמשו בו הרבה.</p>`,
  },

  {
    type: 'content',
    title: 'BUILD_ID ו-BUILD_URL',
    html: `<p>שני המשתנים הכי שימושיים: <strong>BUILD_ID</strong> - מזהה הריצה הנוכחית, ו-<strong>BUILD_URL</strong> - הכתובת של הריצה הזו ב-Jenkins. שימוש נפוץ ב-BUILD_ID הוא לתייג בו Docker Image שנבנה, כדי לדעת בדיוק איזה build יצר אותו.</p>`,
  },

  {
    type: 'content',
    title: 'שימוש במשתנים ב-Shell',
    html: `<p>בתוך Execute shell, ניגשים למשתנה עם <strong>$</strong> וסוגריים מסולסלים. נריץ את זה ונראה בפלט את המזהה והכתובת של הריצה הספציפית הזו.</p>`,
    code: {
      language: 'bash',
      content: 'echo "The build id of this job is ${BUILD_ID}"\necho "The build url is ${BUILD_URL}"',
    },
  },

  {
    type: 'content',
    title: 'למה הכל מודפס פעמיים?',
    html: `<p>ב-Console Output כל שורה מופיעה פעמיים: פעם אחת עם סימן <strong>+</strong> בהתחלה - זו הפקודה עצמה שרצה, ופעם שנייה - זה ה-stdout שהפקודה הדפיסה בפועל. זה לא באג, זו התנהגות רגילה של Jenkins שמראה גם מה רץ וגם מה יצא ממנו.</p>`,
    code: {
      language: 'text',
      content: '+ echo The build id of this job is 3\nThe build id of this job is 3',
    },
  },

  {
    type: 'section',
    title: 'Workspace וניקוי לפני Build',
    intro: 'איפה בפועל נשמרים הקבצים של ה-Job',
  },

  {
    type: 'content',
    title: 'מה זה Workspace?',
    html: `<p>ה-<strong>Workspace</strong> הוא התיקייה שבה Jenkins בפועל מריץ את ה-Job - שם נמצא הקוד שנמשך, ושם נוצרים כל הקבצים שה-Build Steps יוצרים.</p>`,
    code: {
      language: 'bash',
      content: 'ls -ltr\necho "1234" > test.txt\nls -ltr',
    },
  },

  {
    type: 'content',
    title: 'קבצים נשארים בין ריצות',
    html: `<p>נריץ את ה-Job פעם נוספת, בלי לשנות כלום. ה-<strong>ls -ltr</strong> הראשון הפעם כבר מראה שקובץ test.txt קיים - כי הוא נשאר מהריצה הקודמת. זה אומר שאנחנו לא באמת מתחילים מסביבה נקייה בכל build.</p>`,
  },

  {
    type: 'content',
    title: 'הפתרון: Delete Workspace Before Build Starts',
    html: `<p>חוזרים ל-Configure, ותחת Build Environment מסמנים <strong>Delete workspace before build starts</strong>. אפשר גם להגדיר תבניות למחיקה סלקטיבית של קבצים, אבל ברירת המחדל מוחקת הכל. עכשיו כל build מתחיל מ-workspace ריק לגמרי.</p><p class="content-slide__prompt">שאלת מעבר: אפשר גם לראות את הקבצים האלה ישירות בשרת עצמו?</p>`,
  },

  {
    type: 'section',
    title: 'סיור בקבצי המערכת של Jenkins',
    intro: 'כלי אבחון שכל Jenkins Administrator צריך',
  },

  {
    type: 'content',
    title: 'כניסה לתוך הקונטיינר',
    html: `<p>אפשר להיכנס ישירות לתוך הקונטיינר של Jenkins ולחקור את מערכת הקבצים שלו - כלי אבחון מצוין כשמנסים להבין למה Job מתנהג בצורה מוזרה.</p>`,
    code: {
      language: 'bash',
      content: 'docker exec -it jenkins-blueocean bash',
    },
  },

  {
    type: 'content',
    title: '$JENKINS_HOME',
    html: `<p>כל הנתונים של Jenkins יושבים בתיקייה <strong>/var/jenkins_home</strong> - בדיוק ה-volume שמיפינו בפקודת docker run. שם נמצאים ה-Jobs, ה-Plugins וקבצי ההגדרות.</p>`,
    code: {
      language: 'bash',
      content: 'cd /var/jenkins_home\nls -ltra',
    },
  },

  {
    type: 'content',
    title: 'תיקיית workspace',
    html: `<p>בתוך JENKINS_HOME יש תיקייה בשם <strong>workspace</strong>, ובתוכה תיקייה נפרדת לכל Job - בדיוק לפי השם שנתנו לו. זו הסיבה שרווחים בשם Job הם רעיון רע.</p>`,
    code: {
      language: 'bash',
      content: 'cd workspace\nls -ltra\ncd my_first_job\ncat test.txt',
    },
  },

  {
    type: 'content',
    title: 'עוד תיקיות שכדאי להכיר',
    html: `<p>מסביב לתיקיית workspace יש עוד תיקיות שימושיות לפתרון תקלות: <strong>plugins</strong> עם כל התוספים המותקנים, <strong>updates</strong> עם עדכוני plugins, קבצי XML של הקונפיגורציה, ותיקיית logs.</p><ul><li>plugins/ - התוספים המותקנים</li><li>updates/ - עדכוני plugins</li><li>*.xml - קבצי קונפיגורציה</li><li>logs/ - יומני מערכת</li></ul><p class="content-slide__prompt">שאלת מעבר: אחרי שהכרנו את הקבצים, בואו ניצור עוד Job - הפעם עם קוד אמיתי</p>`,
  },

  {
    type: 'section',
    title: 'Job שני: הרצת סקריפט Python',
    intro: 'לא רק Hello World - הרצת קוד אמיתי מ-repository',
  },

  {
    type: 'content',
    title: 'יצירת my_python_job',
    html: `<p>יוצרים Freestyle Project חדש בשם <strong>my_python_job</strong>, ובקטע Source Control Management בוחרים Git ומכניסים את כתובת ה-repository. מכיוון שזה repository ציבורי, אין צורך ב-Credentials - אבל ב-repository פרטי חובה לבחור או להוסיף Credentials מתאימות.</p>`,
  },

  {
    type: 'content',
    title: 'איזו גרסת Python בכלל יש על השרת?',
    html: `<p>לפני שמריצים סקריפט, שווה לוודא מה מותקן על השרת. ננסה קודם python, ואם זה לא עובד - python3.</p>`,
    code: {
      language: 'bash',
      content: 'python --version\n# python: command not found\n\npython3 --version\n# Python 3.11.4',
    },
  },

  {
    type: 'content',
    title: 'הרצת הסקריפט',
    html: `<p>עכשיו, ב-Execute shell, פשוט מריצים את הסקריפט מתוך הקוד שנמשך מה-repository בעזרת python3.</p>`,
    code: {
      language: 'bash',
      content: 'python3 hello_world.py',
    },
  },

  {
    type: 'content',
    title: 'למה זה חזק?',
    html: `<p>בלי Jenkins, כדי להריץ סקריפט Python על שרת הייתם צריכים להתחבר ב-SSH ולהריץ אותו ידנית. עם Jenkins, פשוט לוחצים כפתור - ומקבלים גם הרצה, גם Trigger אוטומטי (Webhook או Cron), וגם היסטוריה מלאה של כל ריצה כולל הפלט שלה. אותו רעיון עובד מצוין גם עם Ansible Playbooks במקום לוגין ידני לשרת כדי להריץ אותם.</p><ul><li>לא צריך SSH ידני לשרת</li><li>Trigger אוטומטי</li><li>היסטוריה מלאה + לוגים</li><li>עובד גם ל-Bash, Python, Ansible ועוד</li></ul>`,
  },
]
