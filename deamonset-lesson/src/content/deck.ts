import type { DeckMeta, Slide } from '../slides/types'

export const meta: DeckMeta = {
  title: 'Kubernetes: DaemonSet',
  author: {
    name: 'Lirone Fitoussi',
    role: 'Full Stack | IT | DevOps | Automations',
    githubUrl: '#',
  },
  topicLogoSrc: '/brand/topic-logo.svg',
}

export const slides: Slide[] = [
  {
    type: 'cover',
    title: 'Kubernetes: DaemonSet',
  },

  {
    type: 'section',
    title: 'יש משימות שצריכות לרוץ בכל מקום',
    intro: 'לפני שנכיר כלי חדש, צריך להבין איזו בעיה הוא בא לפתור',
  },

  {
    type: 'content',
    title: 'מי מחליט איפה Pod ירוץ?',
    html: `<p>ב-Kubernetes אנחנו לא בוחרים ידנית שרת לכל אפליקציה. אנחנו מגדירים מה צריך לרוץ, וה-<strong>Scheduler</strong> בוחר לכל Pod את ה-Node המתאים לפי משאבים פנויים ואילוצים. זה בדיוק הכוח של המערכת: היא מפזרת את העבודה בשבילנו.</p><ul><li>אנחנו מצהירים מה להריץ</li><li>ה-Scheduler בוחר איפה</li><li>המיקום יכול להשתנות לאורך הזמן</li></ul>`,
  },

  {
    type: 'content',
    title: 'לרוב האפליקציות לא אכפת איפה',
    html: `<p>כשמריצים API או אתר עם Deployment, מבקשים מספר עותקים, ולא משנה על אילו Nodes הם נוחתים. משתמש שנכנס לאתר לא יודע ולא צריך לדעת איזה Node ענה לו. העיקר שיש מספיק עותקים.</p>`,
    code: {
      language: 'yaml',
      content:
        'kind: Deployment\nspec:\n  replicas: 3   # שלושה עותקים, לא משנה איפה',
    },
  },

  {
    type: 'content',
    title: 'אבל יש משימות שצמודות ל-Node',
    html: `<p>חלק מהעבודה באשכול היא לא "שירות למשתמשים" אלא "שירות ל-Node עצמו". סוכן שאוסף את הלוגים של המכונה חייב לשבת על אותה מכונה. סוכן שמודד CPU של ה-Node לא יכול למדוד אותו מרחוק, מ-Node אחר.</p><ul><li>איסוף לוגים מ-<strong>/var/log</strong> של המכונה</li><li>מדידת CPU, RAM ודיסק של ה-Node</li><li>רכיבי רשת שכל Node חייב להריץ</li></ul><p class="content-slide__prompt">שאלת מעבר: אפשר לסדר את זה עם Deployment רגיל?</p>`,
  },

  {
    type: 'content',
    title: 'למה Deployment לא פותר את זה?',
    html: `<p>ב-Deployment אנחנו קובעים <strong>כמה</strong> עותקים ירוצו, לא <strong>איפה</strong>. גם אם יש 3 Nodes ונבקש 3 עותקים, ה-Scheduler חופשי לשים שניים על אותו Node ולהשאיר Node אחד בלי סוכן בכלל. הלוגים של אותו Node פשוט לא ייאספו.</p>`,
    code: {
      language: 'text',
      content:
        'replicas: 3\n\nnode-1: agent, agent   <- שניים על אותו Node\nnode-2: agent\nnode-3: (כלום)         <- נקודה עיוורת',
    },
  },

  {
    type: 'content',
    title: 'והאשכול משתנה כל הזמן',
    html: `<p>נניח שהצלחנו לכוון ידנית עותק לכל Node. מחר ה-Autoscaler מוסיף Node חדש בגלל עומס, ואף אחד לא זוכר להוסיף לו סוכן. ה-Node החדש עובד, מריץ Pods, אבל אף אחד לא אוסף ממנו לוגים ולא מודד אותו.</p><ul><li>Nodes נוספים ונעלמים אוטומטית</li><li>ניהול ידני לא עומד בקצב</li><li>כל פספוס יוצר נקודה עיוורת</li></ul><p class="content-slide__prompt">שאלת מעבר: מי ידאג שעל כל Node, תמיד, ירוץ בדיוק עותק אחד?</p>`,
  },

  {
    type: 'section',
    title: 'DaemonSet',
    intro: 'העותק שרץ על כל Node, בלי שנבקש כמה',
  },

  {
    type: 'content',
    title: 'הפתרון: DaemonSet',
    html: `<p>ל-Kubernetes יש משאב שנבנה בדיוק לצורך הזה: <strong>DaemonSet</strong>. במקום להגדיר מספר עותקים, מגדירים תבנית של Pod, ו-Kubernetes דואג שעותק אחד שלה ירוץ על כל Node באשכול. לא צריך לספור Nodes ולא לעדכן מספרים.</p><ul><li>אין שדה replicas בכלל</li><li>עותק אחד לכל Node</li><li>Kubernetes אוכף את זה כל הזמן</li></ul>`,
  },

  {
    type: 'content',
    title: 'Node נוסף? Pod נוסף',
    html: `<p>הקסם האמיתי הוא בהתנהגות לאורך זמן. כש-Node חדש מצטרף לאשכול, ה-DaemonSet מריץ עליו Pod אוטומטית. כש-Node יורד, ה-Pod שלו נמחק יחד איתו. האשכול משתנה, והכיסוי נשאר מלא.</p>`,
    code: {
      language: 'text',
      content:
        'node-4 joined the cluster\n  -> DaemonSet schedules pod on node-4\n\nnode-2 removed\n  -> its pod is garbage collected',
    },
  },

  {
    type: 'content',
    title: 'DaemonSet מול Deployment',
    html: `<p>שניהם מריצים עותקים של אותו Pod, אבל הם עונים על שאלות שונות. Deployment עונה על "כמה עותקים צריך כדי לעמוד בעומס?". DaemonSet עונה על "איך מבטיחים נוכחות על כל Node?".</p><ul><li>Deployment: מספר עותקים, מיקום גמיש</li><li>DaemonSet: עותק לכל Node, המספר נגזר מהאשכול</li><li>Deployment ל-Scale, DaemonSet לכיסוי</li></ul><p class="content-slide__prompt">שאלת מעבר: אילו דברים באמת מריצים ככה בעולם האמיתי?</p>`,
  },

  {
    type: 'section',
    title: 'שימושים בעולם האמיתי',
    intro: 'איפה פוגשים DaemonSet כמעט בכל אשכול',
  },

  {
    type: 'content',
    title: 'איסוף לוגים מכל Node',
    html: `<p>זוכרים את שיעור הלוגים? כדי לרכז לוגים, צריך Collector שקורא אותם מכל מכונה. כלים כמו <strong>Fluentd</strong>, <strong>Fluent Bit</strong> ו-<strong>Promtail</strong> רצים בדיוק כך: DaemonSet ששם עותק על כל Node, קורא את הלוגים המקומיים ושולח אותם למרכז.</p><ul><li>עותק אחד על כל Node</li><li>קורא את הלוגים של כל ה-Pods במכונה</li><li>שולח ל-Elasticsearch או Loki</li></ul>`,
  },

  {
    type: 'content',
    title: 'ניטור ה-Node עצמו',
    html: `<p>כדי לדעת כמה CPU, זיכרון ודיסק כל מכונה צורכת, צריך סוכן שיושב עליה ומודד מבפנים. <strong>Node Exporter</strong> של Prometheus הוא הדוגמה הקלאסית: DaemonSet שחושף מדדים של כל Node, ומערכת הניטור אוספת אותם.</p><ul><li>מדדי CPU, RAM ודיסק לכל Node</li><li>אין Node בלי מדידה</li><li>Node חדש מנוטר מהרגע הראשון</li></ul>`,
  },

  {
    type: 'content',
    title: 'Kubernetes בעצמו משתמש בזה',
    html: `<p>גם רכיבי הליבה של האשכול רצים כ-DaemonSets. <strong>kube-proxy</strong>, שמנהל את חוקי הרשת, חייב לרוץ על כל Node. גם תוספי רשת כמו Calico או Weave, וסוכני אחסון מבוזר כמו Ceph, עובדים באותה שיטה. אפשר לראות את זה באשכול אמיתי:</p>`,
    code: {
      language: 'bash',
      content:
        'kubectl get daemonsets -n kube-system\n\nNAME         DESIRED   CURRENT   READY\nkube-proxy   3         3         3\ncalico-node  3         3         3',
    },
  },

  {
    type: 'section',
    title: 'כותבים DaemonSet',
    intro: 'מהרעיון לקובץ YAML שרץ באשכול',
  },

  {
    type: 'content',
    title: 'המבנה מוכר, בלי replicas',
    html: `<p>אם כתבתם פעם Deployment, אתם כבר יודעים לכתוב DaemonSet. אותו מבנה בדיוק: metadata, selector, ותבנית Pod. משנים את ה-kind, מוחקים את replicas, וזהו. את הכמות קובע האשכול.</p>`,
    code: {
      language: 'yaml',
      content:
        'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: node-agent\nspec:\n  selector:\n    matchLabels:\n      app: node-agent\n  template:\n    metadata:\n      labels:\n        app: node-agent\n    spec:\n      containers:\n        - name: agent\n          image: node-agent:1.0',
    },
  },

  {
    type: 'content',
    title: 'דוגמה אמיתית: Fluentd על כל Node',
    html: `<p>כדי ש-Collector יקרא את הלוגים של המכונה, הוא צריך גישה לתיקיית הלוגים של ה-Node. עושים את זה עם <strong>hostPath</strong>: מחברים את /var/log של המכונה לתוך ה-Container.</p>`,
    code: {
      language: 'yaml',
      content:
        'kind: DaemonSet\nmetadata:\n  name: fluentd\nspec:\n  template:\n    spec:\n      containers:\n        - name: fluentd\n          image: fluent/fluentd\n          volumeMounts:\n            - name: varlog\n              mountPath: /var/log\n      volumes:\n        - name: varlog\n          hostPath:\n            path: /var/log',
    },
  },

  {
    type: 'content',
    title: 'מריצים ובודקים',
    html: `<p>יוצרים את ה-DaemonSet כמו כל משאב אחר, עם kubectl apply. אחר כך בודקים את המצב שלו. שימו לב לעמודה DESIRED: לא כתבנו בשום מקום 3. המספר הזה הגיע ממספר ה-Nodes באשכול.</p>`,
    code: {
      language: 'bash',
      content:
        'kubectl apply -f fluentd.yaml\nkubectl get daemonsets\n\nNAME      DESIRED   CURRENT   READY   AVAILABLE\nfluentd   3         3         3       3',
    },
  },

  {
    type: 'content',
    title: 'אחד על כל Node, באמת',
    html: `<p>אפשר לוודא את ההבטחה בעיניים: מציגים את ה-Pods עם העמודה NODE, ורואים שכל Pod נחת על Node אחר. בדיוק עותק אחד לכל מכונה, בלי שביקשנו מיקום ידנית.</p><p class="content-slide__prompt">שאלת מעבר: ומה אם רוצים עותק רק על חלק מה-Nodes?</p>`,
    code: {
      language: 'bash',
      content:
        'kubectl get pods -l app=fluentd -o wide\n\nNAME            READY   STATUS    NODE\nfluentd-8xk2p   1/1     Running   node-1\nfluentd-q94mm   1/1     Running   node-2\nfluentd-zl7ws   1/1     Running   node-3',
    },
  },

  {
    type: 'section',
    title: 'לא תמיד רוצים את כולם',
    intro: 'שליטה על אילו Nodes ה-DaemonSet יכסה',
  },

  {
    type: 'content',
    title: 'רק Nodes שסימנו: nodeSelector',
    html: `<p>לפעמים הסוכן רלוונטי רק לחלק מהמכונות. למשל, סוכן שמנטר דיסקים מהירים נחוץ רק על Nodes עם SSD. מסמנים את ה-Nodes המתאימים ב-Label, ומוסיפים <strong>nodeSelector</strong> לתבנית ה-Pod. ה-DaemonSet יכסה רק אותם.</p>`,
    code: {
      language: 'yaml',
      content:
        '# kubectl label nodes node-2 ssd="true"\n\nspec:\n  template:\n    spec:\n      nodeSelector:\n        ssd: "true"',
    },
  },

  {
    type: 'content',
    title: 'ומה עם Nodes מוגנים?',
    html: `<p>ל-Nodes של ה-Control Plane יש <strong>Taint</strong> שמרחיק מהם Pods רגילים. אבל סוכן לוגים או ניטור צריך לרוץ גם שם, אחרת ה-Nodes החשובים ביותר יהיו נקודה עיוורת. בשביל זה מוסיפים ל-Pod <strong>Toleration</strong>.</p>`,
    code: {
      language: 'yaml',
      content:
        'spec:\n  template:\n    spec:\n      tolerations:\n        - key: node-role.kubernetes.io/control-plane\n          operator: Exists\n          effect: NoSchedule',
    },
  },

  {
    type: 'content',
    title: 'איך מעדכנים DaemonSet?',
    html: `<p>יצאה גרסה חדשה של הסוכן. כברירת מחדל, DaemonSet מתעדכן ב-<strong>RollingUpdate</strong>: שינוי בתבנית ה-Pod מחליף את העותקים בהדרגה, ו-maxUnavailable קובע כמה מתעדכנים בו-זמנית. את ההתקדמות רואים עם kubectl rollout status.</p>`,
    code: {
      language: 'yaml',
      content:
        'spec:\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 1\n\n# kubectl rollout status ds/fluentd',
    },
  },

  {
    type: 'content',
    title: 'התמונה המלאה',
    html: `<p>עכשיו שיעור הלוגים נסגר במעגל: כשאמרנו "Promtail רץ על כל Node ואוסף לוגים", הכלי שמבטיח את זה הוא DaemonSet. כשיש משימה שחייבת נוכחות על כל מכונה, זו התשובה של Kubernetes.</p><ul><li>Deployment: כמה עותקים. DaemonSet: עותק על כל Node</li><li>nodeSelector ו-Tolerations מכוונים את הכיסוי</li><li>RollingUpdate מחליף גרסאות בבטחה</li><li>מחיקת ה-DaemonSet מוחקת גם את כל ה-Pods שלו</li></ul>`,
  },
]
