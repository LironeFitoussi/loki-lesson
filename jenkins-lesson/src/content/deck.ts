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
    html: `<p>בלי Jenkins, כדי להריץ סקריפט Python על שרת הייתם צריכים להתחבר ב-SSH ולהריץ אותו ידנית. עם Jenkins, פשוט לוחצים כפתור - ומקבלים גם הרצה, גם Trigger אוטומטי (Webhook או Cron), וגם היסטוריה מלאה של כל ריצה כולל הפלט שלה. אותו רעיון עובד מצוין גם עם Ansible Playbooks במקום לוגין ידני לשרת כדי להריץ אותם.</p><ul><li>לא צריך SSH ידני לשרת</li><li>Trigger אוטומטי</li><li>היסטוריה מלאה + לוגים</li><li>עובד גם ל-Bash, Python, Ansible ועוד</li></ul><p class="content-slide__prompt">שאלת מעבר: עד עכשיו כל ה-Jobs רצו על ה-Master עצמו - איך מגדירים Agent אמיתי?</p>`,
  },

  {
    type: 'section',
    title: 'הגדרת Agents: Nodes ו-Clouds',
    intro: 'Manage Jenkins -> Manage Nodes and Clouds',
  },

  {
    type: 'content',
    title: 'שתי דרכים להוסיף Agent',
    html: `<p>ב-Manage Nodes and Clouds יש שני מסכים עיקריים. <strong>New Node</strong> מגדיר Permanent Agent - שרת Linux או Windows קבוע ש-Jenkins מתחבר אליו ב-SSH ומחלק לו עבודה. זו הדרך הישנה והפחות נפוצה כיום. <strong>Configure Clouds</strong> מגדיר Agents דינמיים על גבי פלטפורמות כמו Docker, Kubernetes או AWS - וזו הדרך המקובלת היום.</p><ul><li>New Node - Permanent Agent (ישן יותר)</li><li>Configure Clouds - Agent דינמי (נפוץ יותר)</li></ul>`,
  },

  {
    type: 'content',
    title: 'התקנת Docker Plugin',
    html: `<p>כדי ש-Docker יופיע כאופציה תחת Configure Clouds, צריך קודם להתקין את ה-Plugin שלו. נכנסים ל-Plugin Manager, מסננים לפי Cloud Providers, מוצאים <strong>Docker</strong>, ומתקינים אותו. אחרי ההתקנה צריך להפעיל מחדש את שרת Jenkins כדי שה-Plugin ייכנס לתוקף.</p><ul><li>Manage Jenkins -> Plugins -> Available</li><li>סינון לפי Cloud Providers</li><li>Download now and install after restart</li></ul><p class="content-slide__prompt">שאלת מעבר: אחרי ההתקנה, איך מחברים את Jenkins ל-Docker בפועל?</p>`,
  },

  {
    type: 'section',
    title: 'הגדרת Docker Cloud',
    intro: 'לחבר בין Jenkins Master לבין דוקר שרץ במקום אחר',
  },

  {
    type: 'content',
    title: 'לאן Jenkins צריך להתחבר?',
    html: `<p>תחת Configure Clouds -> Add Docker -> Docker Cloud details, צריך להגדיר את ה-<strong>Docker Host URI</strong>. אם Docker רץ בתוך אותה מכונה כמו Jenkins - אפשר להצביע ל-127.0.0.1. אבל אם Docker רץ במקום אחר (למשל Docker Desktop על המחשב האישי, מחוץ לקונטיינר של Jenkins) - צריך להצביע לכתובת ה-IP של אותו שרת.</p>`,
  },

  {
    type: 'content',
    title: 'הבעיה: Jenkins בקונטיינר, Docker על המחשב המקומי',
    html: `<p>אצלנו Docker רץ דרך Docker Desktop על המחשב המקומי, לא בתוך קונטיינר ה-Jenkins. כדי לגשר על הפער, מריצים קונטיינר עזר עם <strong>socat</strong> שמשמש כ-proxy - הוא מעביר תעבורת TCP מתוך רשת ה-Docker של Jenkins אל ה-Docker Socket של המכונה המארחת.</p>`,
    code: {
      language: 'bash',
      content:
        'docker run -d --name socat-proxy \\\n  --network jenkins \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  bobrik/socat \\\n  TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock',
    },
  },

  {
    type: 'content',
    title: 'מוצאים את ה-IP של קונטיינר ה-Proxy',
    html: `<p>כדי לדעת לאן להפנות את Jenkins, שולפים את כתובת ה-IP הפנימית של קונטיינר ה-socat בתוך ה-network המשותף.</p>`,
    code: {
      language: 'bash',
      content: "docker inspect socat-proxy | grep IPAddress\n# \"IPAddress\": \"172.19.0.3\"",
    },
  },

  {
    type: 'content',
    title: 'חיבור, בדיקה ושמירה',
    html: `<p>ב-Docker Host URI מכניסים <strong>tcp://172.19.0.3:2375</strong>, מסמנים Enabled, ולוחצים <strong>Test Connection</strong>. אם הכתובת נכונה, מקבלים אישור חיבור. אם יש שגיאה - כדאי לבדוק Show Details, וברוב המקרים הבעיה היא נושא של ניתוב רשת (routing) בין הקונטיינרים.</p><p class="content-slide__prompt">שאלת מעבר: יש חיבור ל-Docker - איך אומרים ל-Jenkins איזה Image להריץ בתור Agent?</p>`,
  },

  {
    type: 'section',
    title: 'תבנית Docker Agent (Alpine)',
    intro: 'ה-Template שמגדיר איך נראה Agent חדש שנוצר דינמית',
  },

  {
    type: 'content',
    title: 'Add Docker Template',
    html: `<p>אחרי שה-Docker Cloud מוגדר ומחובר, חוזרים ל-Configure Clouds ולוחצים <strong>Add Docker Template</strong>. כאן בונים את "המתכון" שלפיו Jenkins ייצור Agent חדש בכל פעם שצריך.</p>`,
  },

  {
    type: 'content',
    title: 'Label - איך ה-Master מזהה את ה-Agent',
    html: `<p>ה-<strong>Label</strong> הוא השם שבאמצעותו ה-Pipeline או ה-Job מבקשים להריץ דווקא על ה-Agent הזה. הוא צריך להיות תיאורי, כדי שיהיה ברור מה ה-Agent הזה מספק.</p>`,
    code: {
      language: 'text',
      content: 'Label: docker-agent-alpine\nEnabled: true\nName: docker-agent-alpine',
    },
  },

  {
    type: 'content',
    title: 'Docker Image - הבסיס של ה-Agent',
    html: `<p>זה השדה החשוב ביותר: איזה Docker Image ירוץ כשה-Agent נוצר. אפשר למשוך Image מוכן מ-Docker Hub - למשל image רשמי של Jenkins Agent על בסיס Alpine עם JDK 11 - או להצביע ל-Image פרטי משלכם, כל עוד מגדירים Credentials מתאימות כדי ש-Jenkins יוכל למשוך אותו.</p>`,
    code: {
      language: 'text',
      content: 'Docker Image: jenkins/inbound-agent:alpine-jdk11',
    },
  },

  {
    type: 'content',
    title: 'Instance Capacity ו-Remote File System Root',
    html: `<p><strong>Instance Capacity</strong> קובע כמה Agents מסוג הזה אפשר להריץ במקביל - כדאי להתחיל עם מספר נמוך, כדי לא להציף את המערכת בטעות. <strong>Remote File System Root</strong> הוא המקום בתוך הקונטיינר שבו ייווצר ה-Workspace - ברירת המחדל המקובלת היא /home/jenkins.</p>`,
    code: {
      language: 'text',
      content: 'Instance Capacity: 2\nRemote File System Root: /home/jenkins',
    },
  },

  {
    type: 'content',
    title: 'שמירה',
    html: `<p>אחרי שמילאנו Label, Docker Image, Instance Capacity ו-Remote File System Root - זה כל מה שצריך כדי שה-Template יהיה תקין. לוחצים Save.</p><p class="content-slide__prompt">שאלת מעבר: יש לנו Template - איך גורמים ל-Job להשתמש בו?</p>`,
  },

  {
    type: 'section',
    title: 'הרצת ה-Job הראשון על Docker Agent',
    intro: 'לחבר בין Job קיים לבין ה-Agent החדש',
  },

  {
    type: 'content',
    title: 'Restrict where this project can be run',
    html: `<p>נכנסים ל-my_first_job -> Configure, מסמנים <strong>Restrict where this project can be run</strong>, וכותבים את שם ה-Label שהגדרנו - docker-agent-alpine. עכשיו ה-Job הזה ירוץ אך ורק על Agent עם ה-Label הזה, ולא על ה-Master.</p>`,
  },

  {
    type: 'content',
    title: 'כשה-Label "לא נמצא"',
    html: `<p>לפעמים ה-autocomplete של Jenkins מוסיף רווח מיותר בסוף ה-Label, וזה גורם להתראה שה-Label לא קיים. פותרים את זה על ידי מחיקת הרווח, ולפעמים גם רק יציאה וחזרה למסך ה-Configure מספיקה כדי שה-UI יתעדכן.</p>`,
  },

  {
    type: 'content',
    title: 'ה-Build רץ מרחוק',
    html: `<p>שומרים, לוחצים Build Now - ורואים ש-Jenkins מחפש Agent עם ה-Label docker-agent-alpine. אחרי כמה שניות (Jenkins צריך זמן להקים את הקונטיינר), ה-Agent נוצר, ה-Job רץ עליו בהצלחה, ובמסך ה-Build רואים "Built on docker" עם כל הפרטים של הקונטיינר שהורם.</p><p class="content-slide__prompt">שאלת מעבר: אז אם זה עבד ל-Hello World, זה יעבוד גם ל-Job של Python?</p>`,
  },

  {
    type: 'section',
    title: 'Python Job נכשל על ה-Alpine Agent',
    intro: 'לא כל Agent מתאים לכל Job',
  },

  {
    type: 'content',
    title: 'אותה שיטה, Job אחר',
    html: `<p>מגדירים גם את my_python_job להיות מוגבל ל-Label docker-agent-alpine, ומריצים Build Now. הקוד נמשך בהצלחה מה-repository - אבל ה-Build נכשל.</p>`,
  },

  {
    type: 'content',
    title: 'python3: command not found',
    html: `<p>הבעיה: ה-Image שבחרנו ל-Template הזה הוא Image רשמי של Jenkins Agent, אבל בלי Python מותקן עליו. ה-Agent הצליח לקום, הקוד נמשך - אבל אין שם python3 להריץ איתו את הסקריפט.</p><ul><li>ה-Agent קם בהצלחה</li><li>הקוד נמשך בהצלחה</li><li>python3 לא קיים ב-Image</li></ul><p class="content-slide__prompt">שאלת מעבר: אז מה עושים כשה-Image המוכן לא מספיק?</p>`,
  },

  {
    type: 'section',
    title: 'תבנית Docker Agent מותאמת ל-Python',
    intro: 'כשה-Image הכללי לא מספיק - בונים Image משלכם',
  },

  {
    type: 'content',
    title: 'Template שני, ל-Python',
    html: `<p>הפתרון הוא Docker Template נוסף, עם Image שכולל Python. חוזרים ל-Configure Clouds -> Docker Agent Templates -> Add Docker Template, ונותנים לו Label חדש שמזהה אותו כ-Agent ל-Python.</p>`,
    code: {
      language: 'text',
      content: 'Label: docker-agent-python\nEnabled: true\nName: docker-agent-python',
    },
  },

  {
    type: 'content',
    title: 'Image מותאם אישית',
    html: `<p>במקום Image כללי מ-Docker Hub, מצביעים ל-Image פרטי שנבנה במיוחד עם Python מותקן עליו - כאן זה image שנבנה ופורסם מראש ל-Docker Hub.</p>`,
    code: {
      language: 'text',
      content: 'Docker Image: devopsjourney1/my-jenkins-agents:python1\nInstance Capacity: 2\nRemote File System Root: /home/jenkins',
    },
  },

  {
    type: 'content',
    title: 'מחברים את ה-Job ל-Template החדש',
    html: `<p>ב-my_python_job -> Configure, מחליפים את ה-Label מ-docker-agent-alpine ל-<strong>docker-agent-python</strong>. שומרים, ומריצים Build Now.</p>`,
  },

  {
    type: 'content',
    title: 'הפעם זה עובד',
    html: `<p>ה-Job רץ בהצלחה על ה-Agent החדש, ש-python3 מותקן עליו. שווה לשים לב - זו דוגמה טובה לכך שהרבה פעמים תגלו באגים רק כשמריצים בפועל: הסקריפט הדפיס "hellworld" במקום "hello world", באג קטן בקוד עצמו שלא קשור בכלל ל-Jenkins.</p>`,
  },

  {
    type: 'section',
    title: 'Poll SCM: הפעלה אוטומטית',
    intro: 'להפסיק ללחוץ Build Now ידנית',
  },

  {
    type: 'content',
    title: 'Build Triggers -> Poll SCM',
    html: `<p>עד עכשיו הרצנו כל build בלחיצת כפתור. ב-Build Triggers אפשר לסמן <strong>Poll SCM</strong> - כך ה-Master בעצמו בודק מדי פעם אם היה שינוי ב-repository, ומריץ build אוטומטית אם כן. זו חלופה פשוטה יותר מ-Webhook, שעובדת מצוין גם כש-Jenkins נמצא מאחורי Firewall.</p>`,
  },

  {
    type: 'content',
    title: 'לוח הזמנים של הבדיקה',
    html: `<p>הפורמט דומה מאוד ל-Cron רגיל. <strong>H/5 * * * *</strong> אומר לבדוק בערך כל 5 דקות. ה-<strong>H</strong> (Hash) גורם ל-Jenkins לבחור נקודת זמן אקראית בתוך כל חלון של 5 דקות - במקום שכל ה-Jobs יבדקו בדיוק באותה שנייה. זו Best Practice: היא מפזרת את העומס במקום שכולם יפגשו את ה-Master בו-זמנית.</p>`,
    code: {
      language: 'text',
      content: 'H/5 * * * *',
    },
  },

  {
    type: 'content',
    title: 'רואים את זה בפעולה',
    html: `<p>מתקנים את הבאג בסקריפט ישירות ב-GitHub (hellworld -> hello world) ועושים commit. תוך כמה דקות, בלי שום לחיצה על Build Now, ה-Job מתחיל לרוץ לבד. במסך ה-Build רואים למעלה <strong>"Started by an SCM change"</strong> - הוכחה שה-commit הוא זה שהפעיל את ה-build.</p><p class="content-slide__prompt">שאלת מעבר: יש לנו Agents, Jobs, וטריגר אוטומטי - הזמן לעבור מ-Freestyle ל-Pipeline אמיתי בשפת Groovy</p>`,
  },

  {
    type: 'section',
    title: 'מבוא ל-Pipelines',
    intro: 'New Item -> Pipeline, במקום Freestyle Project',
  },

  {
    type: 'content',
    title: 'יצירת Pipeline Project',
    html: `<p>יצירת Pipeline מתחילה בדיוק כמו Freestyle - New Item, נותנים שם (למשל my_first_build_pipeline), אבל הפעם בוחרים <strong>Pipeline</strong> ולא Freestyle Project.</p>`,
  },

  {
    type: 'content',
    title: 'למה המסך נראה שונה?',
    html: `<p>מסך ה-Configure של Pipeline דומה בהתחלה, אבל אם גוללים למטה - הרבה מהאפשרויות שהכרנו מ-Freestyle (Build Steps, Post-build Actions) פשוט לא שם. הסיבה: כל הלוגיקה הזו עכשיו חיה בתוך שדה אחד - <strong>Pipeline Script</strong>, כתוב בקוד.</p>`,
  },

  {
    type: 'content',
    title: 'שתי דרכים לכתוב Pipeline',
    html: `<p>יש שתי אופציות להזין את הסקריפט. אפשר לכתוב אותו ישירות בתוך תיבת הטקסט ב-UI של Jenkins - וזה מה שנתחיל איתו. אבל השיטה המומלצת היא <strong>Jenkinsfile</strong>: קובץ שיושב בתוך ה-repository עצמו, ו-Jenkins רק מצביע אליו ומריץ אותו משם.</p><ul><li>Pipeline Script - כתוב ישירות ב-UI (להתחלה)</li><li>Jenkinsfile מה-repository (השיטה המומלצת)</li></ul><p class="content-slide__prompt">שאלת מעבר: איך נראה קוד Pipeline בסיסי?</p>`,
  },

  {
    type: 'section',
    title: 'Jenkinsfile Template ותחביר Declarative Pipeline',
    intro: 'השלד שממנו בונים כל Pipeline',
  },

  {
    type: 'content',
    title: 'Declarative מול Scripted',
    html: `<p>ל-Pipelines ב-Jenkins יש שני סגנונות כתיבה: <strong>Declarative</strong> ו-<strong>Scripted</strong>. Declarative הוא הסגנון המובנה, הקריא יותר, ובו כדאי להתחיל וברוב המקרים גם להישאר. כשמחפשים syntax באינטרנט - חשוב לוודא שמדובר ב-Declarative Pipeline.</p>`,
  },

  {
    type: 'content',
    title: 'תבנית בסיסית ל-Jenkinsfile',
    html: `<p>כל Pipeline עטוף בבלוק <strong>pipeline</strong> יחיד. בתוכו בוחרים <strong>agent</strong> - בדיוק כמו ה-Label שהגדרנו קודם ל-Freestyle - ולאחריו את ה-<strong>stages</strong>.</p>`,
    code: {
      language: 'groovy',
      content:
        "pipeline {\n    agent {\n        label 'docker-agent-python'\n    }\n\n    stages {\n        stage('Build') {\n            steps {\n                echo 'Building..'\n                sh 'echo build step'\n            }\n        }\n        stage('Test') {\n            steps {\n                echo 'Testing..'\n                sh 'echo test step'\n            }\n        }\n        stage('Deliver') {\n            steps {\n                echo 'Delivering..'\n                sh 'echo deliver step'\n            }\n        }\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'agent - איפה זה ירוץ',
    html: `<p>בלוק ה-<strong>agent</strong> קובע איפה ה-Pipeline ירוץ, בדיוק כמו "Restrict where this project can be run" ב-Freestyle. כאן מצביעים ל-Label של אחד ה-Agents שהגדרנו קודם - docker-agent-python.</p>`,
  },

  {
    type: 'content',
    title: 'stages ו-steps',
    html: `<p>זהו Pipeline עם שלושה <strong>stages</strong>: Build, Test ו-Deliver - תבנית בדיקה טובה להתחלה. לכל stage יש <strong>steps</strong> משלו - כאן, לצורך הדוגמה, שני steps בכל stage: echo פשוט, ואחריו placeholder של פקודת shell, שבהמשך נחליף בפקודות אמיתיות.</p><p class="content-slide__prompt">שאלת מעבר: מה קורה כשמריצים את זה בפעם הראשונה?</p>`,
  },

  {
    type: 'section',
    title: 'הרצת ה-Pipeline הראשון וניפוי תקלות',
    intro: 'Build Now, ולראות מה קורה בכל שלב',
  },

  {
    type: 'content',
    title: 'תצוגת ה-Pipeline נראית אחרת',
    html: `<p>אחרי Save ו-Build Now, מסך ה-Pipeline נראה שונה לגמרי מ-Freestyle - רואים ויזואלית את שלושת ה-Stages בשורה: Build, Test, Deliver. הפעם Build ירוק, אבל Test ו-Deliver אדומים.</p>`,
  },

  {
    type: 'content',
    title: 'קוראים את הלוג של כל Stage',
    html: `<p>לוחצים על כל Stage כדי לראות בדיוק מה קרה בו. Build הדפיס "Building.." והריץ את ה-shell step בהצלחה. Test הדפיס "Testing.." - ואז נכשל.</p>`,
    code: {
      language: 'text',
      content: "sh: 1: echo test step\": unterminated quoted string",
    },
  },

  {
    type: 'content',
    title: 'כשל בשלב אחד מפיל את הבאים אחריו',
    html: `<p>Deliver נכשל גם הוא - למרות שהקוד שלו תקין. הסיבה: <strong>Test</strong> הוא Stage במעלה הזרימה (upstream) ביחס ל-Deliver, וכשל ב-Stage upstream גורם ל-Stages שבאים אחריו (downstream) להיכשל אוטומטית בלי אפילו לנסות לרוץ.</p><ul><li>Build - עבר</li><li>Test - נכשל (שגיאת תחביר)</li><li>Deliver - נכשל אוטומטית, כי Test upstream נכשל</li></ul>`,
  },

  {
    type: 'content',
    title: 'מתקנים ומריצים שוב',
    html: `<p>חוזרים ל-Configure, מתקנים את המרכאה החסרה ב-Test, שומרים, ומריצים שוב. הפעם כל שלושת ה-Stages ירוקים. ב-Pipelines ארוכים יותר הייתם רואים כאן פס התקדמות חי לכל שלב, אבל כשה-Build כל כך מהיר זה קורה כמעט מיידית.</p><p class="content-slide__prompt">שאלת מעבר: זה עבד, אבל הקוד עדיין יושב רק בתוך ה-UI של Jenkins - איך מוציאים אותו החוצה ל-repository?</p>`,
  },

  {
    type: 'section',
    title: 'Jenkinsfile מתוך SCM',
    intro: 'מעבר מ-Pipeline Script inline ל-Jenkinsfile אמיתי ב-Git',
  },

  {
    type: 'content',
    title: 'יוצרים קובץ Jenkinsfile אמיתי',
    html: `<p>לוקחים בדיוק את אותו קוד, שומרים אותו כקובץ בשם <strong>Jenkinsfile</strong> בתוך ה-repository, ומתקנים את אותה שגיאת המרכאה תוך כדי.</p>`,
  },

  {
    type: 'content',
    title: 'מוסיפים Poll SCM גם כאן',
    html: `<p>בדיוק כמו ב-Freestyle, אפשר להגדיר טריגר גם בתוך ה-Jenkinsfile עצמו, עם בלוק <strong>triggers</strong>. כאן מגדירים בדיקה כל 5 דקות.</p>`,
    code: {
      language: 'groovy',
      content: "pipeline {\n    agent {\n        label 'docker-agent-python'\n    }\n\n    triggers {\n        pollSCM('H/5 * * * *')\n    }\n\n    stages {\n        // ...\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'Pipeline Script from SCM',
    html: `<p>עושים commit ו-push ל-GitHub. בחזרה ב-Jenkins, בתוך הגדרת ה-Pipeline משנים מ-<strong>Pipeline Script</strong> ל-<strong>Pipeline script from SCM</strong>: בוחרים Git, מכניסים את כתובת ה-repository (ואם הוא פרטי - גם Credentials), ומגדירים את ה-Script Path - הנתיב לקובץ Jenkinsfile בתוך ה-repository.</p>`,
    code: {
      language: 'text',
      content: 'SCM: Git\nRepository URL: https://github.com/example/app.git\nScript Path: Jenkinsfile',
    },
  },

  {
    type: 'content',
    title: 'הרצה ראשונה ידנית',
    html: `<p>שומרים, ומריצים Build Now פעם אחת ידנית כדי לוודא שהכל עובד. מהריצה הבאה והלאה, כל commit חדש ב-repository (או כל Poll SCM) יפעיל build אוטומטית - בלי צורך להיכנס בכלל ל-Jenkins.</p><p class="content-slide__prompt">שאלת מעבר: אחרי המעבר ל-SCM, האם הפלט נשאר בדיוק אותו דבר?</p>`,
  },

  {
    type: 'section',
    title: 'Pipeline Script from SCM מוסיף שלב Checkout',
    intro: 'שינוי קטן בהגדרה, שלב חדש בפלט',
  },

  {
    type: 'content',
    title: 'שלב חדש הופיע: Checkout',
    html: `<p>אחרי המעבר ל-Pipeline script from SCM, בתצוגת ה-Pipeline מופיע Stage נוסף בשם <strong>Checkout</strong>, לפני Build. הסיבה: ברגע שה-Pipeline עצמו מגיע מתוך Git, Jenkins צריך קודם למשוך (clone) את ה-repository כדי בכלל להגיע לקובץ Jenkinsfile - וזה קורה אוטומטית, בלי שכתבתם אותו בעצמכם.</p>`,
  },

  {
    type: 'content',
    title: 'תופעת לוואי: היסטוריה מתאפסת',
    html: `<p>שימו לב - כשמבנה ה-Stages משתנה (למשל נוסף Checkout), Jenkins מנקה את היסטוריית ה-Builds הקודמים בתצוגה הגרפית. זו לא תקלה, רק תופעה מוכרת ב-Jenkins שקשורה לאופן שבו הוא משווה בין ריצות עם מבנה Stages שונה.</p>`,
  },

  {
    type: 'content',
    title: 'התאמת לוח הזמנים לסביבת מעבדה',
    html: `<p>בסביבת לימוד, חמש דקות המתנה זה הרבה. אפשר לשנות זמנית את ה-Poll SCM לרוץ כל דקה, כדי לראות תוצאות מהר יותר תוך כדי עבודה.</p>`,
    code: {
      language: 'groovy',
      content: "triggers {\n    pollSCM('* * * * *')\n}",
    },
  },

  {
    type: 'content',
    title: 'זה עובד לבד',
    html: `<p>עושים build ידני אחד לוודא שהכל תקין - Checkout, Build, Test, Deliver כולם ירוקים, ורואים בפלט שהמקור באמת הגיע דרך ה-Jenkinsfile מה-repository.</p><p class="content-slide__prompt">שאלת מעבר: עד עכשיו כל ה-Stages רק הדפיסו טקסט - איך זה נראה עם אפליקציה אמיתית?</p>`,
  },

  {
    type: 'section',
    title: 'בונים Pipeline אמיתי: Build ו-Test',
    intro: 'מפסיקים עם echo, עוברים לאפליקציית Python אמיתית',
  },

  {
    type: 'content',
    title: 'האפליקציה: my_app',
    html: `<p>ב-repository יש תיקייה בשם <strong>my_app</strong> עם סקריפט Python פשוט: הוא מייבא ספרייה בשם <strong>fire</strong> ובונה איתה CLI קטן שמדפיס Hello World - ומקבל גם פרמטר אופציונלי לשם.</p>`,
    code: {
      language: 'python',
      content: "import fire\n\ndef hello(name='World'):\n    print(f'Hello {name}')\n\nif __name__ == '__main__':\n    fire.Fire(hello)",
    },
  },

  {
    type: 'content',
    title: 'אם פשוט נריץ את זה - זה ייכשל',
    html: `<p>אם ננסה להריץ את הסקריפט הזה על ה-Agent כמו שהוא, זה ייכשל - כי לספריית <strong>fire</strong> אין מקום מוכן על ה-Agent. קודם צריך להתקין את התלויות של האפליקציה, בדיוק כמו על כל מכונה אחרת.</p>`,
  },

  {
    type: 'content',
    title: 'שלב Build: התקנת Dependencies',
    html: `<p>ב-Build Stage, נכנסים לתיקיית my_app ומתקינים את כל מה שרשום ב-requirements.txt - כולל fire.</p>`,
    code: {
      language: 'groovy',
      content: "stage('Build') {\n    steps {\n        sh 'cd my_app && pip install -r requirements.txt'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'שלב Test: מריצים את האפליקציה בשתי צורות',
    html: `<p>ב-Test Stage מריצים את הסקריפט פעמיים: פעם אחת בלי פרמטרים, כדי לוודא שהוא רץ עם ברירת המחדל, ופעם שנייה עם פרמטר name - כדי לוודא שגם קלט מהמשתמש עובד כמו שצריך.</p>`,
    code: {
      language: 'groovy',
      content: "stage('Test') {\n    steps {\n        sh 'cd my_app && python3 hello.py'\n        sh 'cd my_app && python3 hello.py --name=Brad'\n    }\n}",
    },
  },

  {
    type: 'content',
    title: 'דוחפים ורואים את זה רץ',
    html: `<p>שומרים, עושים commit ו-push. תוך דקה ה-Pipeline מתחיל לרוץ לבד דרך ה-Poll SCM. ב-Console Output רואים בדיוק את הזרימה: Checkout מצליח, Build מתקין את fire מתוך requirements.txt, ו-Test מריץ את האפליקציה פעמיים - Hello World, ואז Hello Brad. שני ההרצות עובדות.</p><ul><li>Checkout - משך את הקוד</li><li>Build - התקין את fire</li><li>Test - Hello World + Hello Brad</li></ul><p class="content-slide__prompt">שאלת מעבר: יש דרך יותר נוחה לראות את כל זה, בלי להתעסק במסך ה-Pipeline הישן?</p>`,
  },

  {
    type: 'section',
    title: 'Blue Ocean',
    intro: 'אותו Pipeline, ממשק הרבה יותר ברור',
  },

  {
    type: 'content',
    title: 'Open Blue Ocean',
    html: `<p>לוחצים על <strong>Open Blue Ocean</strong> ורואים את אותו Pipeline בדיוק - Checkout, Build, Test, Deliver - אבל בתצוגה גרפית ונקייה בהרבה מהמסך הרגיל של Jenkins.</p>`,
  },

  {
    type: 'content',
    title: 'לחיצה על Stage מציגה בדיוק מה קרה',
    html: `<p>לוחצים על כל Stage בנפרד ורואים בדיוק מה רץ בו - ה-Checkout מ-Version Control, הודעות ה-echo, ולבסוף פקודת ה-pip install שרצה בתוך my_app. באגים ותקלות הרבה יותר קל לאתר כשהתצוגה מפורקת ככה, שלב אחרי שלב.</p>`,
  },

  {
    type: 'content',
    title: 'למה זה שווה לדעת',
    html: `<p>חלק גדול מהעבודה של DevOps Engineer הוא ניפוי תקלות ב-Pipelines - ולכן ממשק נוח כל כך עוזר. במסך הראשי של Blue Ocean רואים גם מה הפעיל כל ריצה - האם היא נלחצה ידנית, או שהיא רצה אוטומטית דרך SCM. אפשר גם להריץ או להשבית build ישירות משם.</p><ul><li>מזהה מייד מי/מה הפעיל כל build</li><li>אפשר להריץ build ישירות מכאן</li><li>Configure עדיין מחזיר לממשק ה-Jenkins הרגיל</li></ul>`,
  },

  {
    type: 'content',
    title: 'רק שכבת תצוגה',
    html: `<p>חשוב להבין: Blue Ocean לא משנה שום דבר במנוע של Jenkins - זו רק שכבת תצוגה נוחה יותר מעל אותו Pipeline. לחיצה על Configure עדיין מחזירה אתכם למסך ה-Configure הרגיל של Jenkins. Blue Ocean שווה במיוחד כשמתקדמים ל-Multibranch Pipelines בהמשך הדרך.</p>`,
  },

  {
    type: 'section',
    title: 'סיכום הקורס',
    intro: 'מה עברנו, מהתקנה ועד Pipeline רץ',
  },

  {
    type: 'content',
    title: 'מה יש לכם עכשיו',
    html: `<p>עברנו מסלול שלם: התקנת שרת Jenkins Master עם Docker, הגדרת Docker Cloud Agents, עבודה עם Freestyle Projects, ולבסוף בניית Pipeline אמיתי בשפת Groovy עם Jenkinsfile שיושב ב-repository.</p><ul><li>התקנה והגדרה של Jenkins Master</li><li>הקמת Docker Cloud Agents</li><li>ניהול Freestyle Projects</li><li>כתיבת Declarative Pipelines ב-Groovy</li></ul>`,
  },

  {
    type: 'content',
    title: 'מכאן והלאה',
    html: `<p>עם הבסיס הזה - אתם יכולים להתחיל להריץ עליו כל דבר: בניית קוד, הרצת בדיקות, Ansible Playbooks, סקריפטים ב-Python או ב-Bash, ופריסה לסביבות אמיתיות. Jenkins הוא כלי שגדל יחד אתכם - ככל שתעבדו איתו יותר, תגלו יותר Plugins ויכולות שמתאימות בדיוק לצרכים שלכם.</p>`,
  },
]
