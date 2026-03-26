// ══════════════════════════════════════════
// DATA — 29 Cities (from crime_dataset_india.csv)
// ══════════════════════════════════════════
const CITIES = {
  Delhi:     {ss:20,pop:"3.2 Cr",crimes:["CYBERCRIME","DRUG OFFENSE","FIREARM OFFENSE"],types:{"CYBERCRIME":6,"DRUG OFFENSE":5,"FIREARM OFFENSE":5,"ROBBERY":5,"DOMESTIC VIOLENCE":5,"Other":74},best:"11pm–2am",worst:"2pm–5pm",yearly:{2020:1181,2021:1200,2022:1206,2023:1090},trend:10,closure:49,total:4677,weapon:"Firearm",zones:[{name:"Connaught Place",score:35},{name:"Dwarka",score:61},{name:"Rohini",score:55},{name:"Saket",score:68},{name:"Shaheen Bagh",score:40}]},
  Mumbai:    {ss:31,pop:"2.1 Cr",crimes:["SEXUAL ASSAULT","SHOPLIFTING","IDENTITY THEFT"],types:{"SEXUAL ASSAULT":5,"SHOPLIFTING":5,"IDENTITY THEFT":5,"ILLEGAL POSSESSION":5,"KIDNAPPING":5,"Other":75},best:"1am–4am",worst:"3am–6am",yearly:{2020:933,2021:941,2022:966,2023:1026},trend:-6,closure:50,total:3866,weapon:"Knife",zones:[{name:"Dharavi",score:38},{name:"Bandra",score:71},{name:"Andheri",score:60},{name:"Colaba",score:65},{name:"Kurla",score:44}]},
  Bangalore: {ss:41,pop:"1.3 Cr",crimes:["PUBLIC INTOXICATION","BURGLARY","VANDALISM"],types:{"PUBLIC INTOXICATION":6,"BURGLARY":5,"VANDALISM":5,"EXTORTION":5,"ASSAULT":5,"Other":74},best:"1am–4am",worst:"8pm–11pm",yearly:{2020:771,2021:790,2022:793,2023:779},trend:2,closure:49,total:3133,weapon:"Blunt Object",zones:[{name:"Koramangala",score:72},{name:"Whitefield",score:68},{name:"Shivajinagar",score:45},{name:"Indiranagar",score:75},{name:"BTM Layout",score:58}]},
  Hyderabad: {ss:48,pop:"1 Cr",  crimes:["IDENTITY THEFT","VEHICLE STOLEN","ARSON"],types:{"IDENTITY THEFT":6,"VEHICLE STOLEN":6,"ARSON":6,"DOMESTIC VIOLENCE":5,"ILLEGAL POSSESSION":5,"Other":72},best:"12am–3am",worst:"1am–4am",yearly:{2020:628,2021:655,2022:608,2023:663},trend:-9,closure:51,total:2554,weapon:"Explosives",zones:[{name:"Banjara Hills",score:74},{name:"Secunderabad",score:60},{name:"Charminar",score:38},{name:"Hitech City",score:78},{name:"Malakpet",score:41}]},
  Chennai:   {ss:53,pop:"0.9 Cr",crimes:["ARSON","KIDNAPPING","BURGLARY"],types:{"ARSON":6,"KIDNAPPING":6,"BURGLARY":5,"HOMICIDE":5,"VEHICLE STOLEN":5,"Other":73},best:"4pm–7pm",worst:"11am–2pm",yearly:{2020:522,2021:551,2022:581,2023:551},trend:5,closure:50,total:2205,weapon:"Knife",zones:[{name:"T Nagar",score:58},{name:"Adyar",score:72},{name:"Velachery",score:65},{name:"Tambaram",score:55},{name:"Washermanpet",score:42}]},
  Kolkata:   {ss:53,pop:"1.5 Cr",crimes:["FRAUD","BURGLARY","TRAFFIC VIOLATION"],types:{"FRAUD":6,"BURGLARY":6,"TRAFFIC VIOLATION":5,"ILLEGAL POSSESSION":5,"COUNTERFEITING":5,"Other":73},best:"7am–10am",worst:"4am–7am",yearly:{2020:566,2021:535,2022:553,2023:528},trend:5,closure:49,total:2182,weapon:"Blunt Object",zones:[{name:"Park Street",score:55},{name:"Salt Lake",score:72},{name:"Howrah",score:40},{name:"New Town",score:70},{name:"Dharmatala",score:44}]},
  Pune:      {ss:57,pop:"0.7 Cr",crimes:["VANDALISM","SHOPLIFTING","VEHICLE STOLEN"],types:{"VANDALISM":6,"SHOPLIFTING":5,"VEHICLE STOLEN":5,"BURGLARY":5,"SEXUAL ASSAULT":5,"Other":74},best:"9pm–12am",worst:"11am–2pm",yearly:{2020:479,2021:471,2022:468,2023:485},trend:-4,closure:49,total:1903,weapon:"Other",zones:[{name:"Koregaon Park",score:70},{name:"Hadapsar",score:58},{name:"Kothrud",score:68},{name:"Yerawada",score:45},{name:"Pimpri",score:60}]},
  Ahmedabad: {ss:61,pop:"0.8 Cr",crimes:["SEXUAL ASSAULT","ASSAULT","DOMESTIC VIOLENCE"],types:{"SEXUAL ASSAULT":6,"ASSAULT":6,"DOMESTIC VIOLENCE":5,"KIDNAPPING":5,"ROBBERY":5,"Other":73},best:"8am–11am",worst:"7pm–10pm",yearly:{2020:409,2021:423,2022:365,2023:402},trend:-10,closure:52,total:1599,weapon:"Explosives",zones:[{name:"Navrangpura",score:65},{name:"Maninagar",score:52},{name:"Satellite",score:70},{name:"Vatva",score:44},{name:"Bopal",score:72}]},
  Jaipur:    {ss:66,pop:"0.4 Cr",crimes:["COUNTERFEITING","TRAFFIC VIOLATION","FRAUD"],types:{"COUNTERFEITING":6,"TRAFFIC VIOLATION":6,"FRAUD":6,"SEXUAL ASSAULT":6,"IDENTITY THEFT":5,"Other":71},best:"12pm–3pm",worst:"4am–7am",yearly:{2020:329,2021:355,2022:307,2023:298},trend:3,closure:51,total:1289,weapon:"Explosives",zones:[{name:"Pink City",score:45},{name:"Vaishali Nagar",score:65},{name:"Malviya Nagar",score:62},{name:"Mansarovar",score:60},{name:"Sanganer",score:50}]},
  Lucknow:   {ss:66,pop:"0.35 Cr",crimes:["TRAFFIC VIOLATION","HOMICIDE","VANDALISM"],types:{"TRAFFIC VIOLATION":6,"HOMICIDE":6,"VANDALISM":5,"PUBLIC INTOXICATION":5,"KIDNAPPING":5,"Other":73},best:"11am–2pm",worst:"6pm–9pm",yearly:{2020:306,2021:338,2022:291,2023:351},trend:-21,closure:52,total:1286,weapon:"Blunt Object",zones:[{name:"Hazratganj",score:58},{name:"Gomti Nagar",score:72},{name:"Alambagh",score:48},{name:"Aliganj",score:65},{name:"Chowk",score:40}]},
  Surat:     {ss:70,pop:"0.6 Cr",crimes:["TRAFFIC VIOLATION","EXTORTION","VANDALISM"],types:{"TRAFFIC VIOLATION":6,"EXTORTION":6,"VANDALISM":6,"CYBERCRIME":6,"DOMESTIC VIOLENCE":6,"Other":70},best:"2pm–5pm",worst:"10pm–1am",yearly:{2020:246,2021:227,2022:238,2023:254},trend:-7,closure:51,total:965,weapon:"Knife",zones:[{name:"Adajan",score:72},{name:"Katargam",score:58},{name:"Varachha",score:50},{name:"Surat City",score:65},{name:"Udhna",score:55}]},
  Kanpur:    {ss:70,pop:"0.3 Cr",crimes:["VANDALISM","KIDNAPPING","COUNTERFEITING"],types:{"VANDALISM":6,"KIDNAPPING":6,"COUNTERFEITING":6,"ASSAULT":5,"PUBLIC INTOXICATION":5,"Other":72},best:"3pm–6pm",worst:"2pm–5pm",yearly:{2020:243,2021:223,2022:268,2023:237},trend:12,closure:51,total:971,weapon:"Other",zones:[{name:"Swaroop Nagar",score:62},{name:"Kidwai Nagar",score:68},{name:"Armapur",score:45},{name:"Civil Lines",score:72},{name:"Kalyanpur",score:58}]},
  Nagpur:    {ss:71,pop:"0.25 Cr",crimes:["ASSAULT","BURGLARY","SHOPLIFTING"],types:{"ASSAULT":6,"BURGLARY":6,"SHOPLIFTING":6,"DRUG OFFENSE":6,"TRAFFIC VIOLATION":5,"Other":71},best:"10am–1pm",worst:"7am–10am",yearly:{2020:203,2021:239,2022:250,2023:235},trend:6,closure:51,total:927,weapon:"Knife",zones:[{name:"Dharampeth",score:74},{name:"Sadar",score:65},{name:"Nandanvan",score:52},{name:"Gandhibagh",score:58},{name:"Lakadganj",score:48}]},
  Ludhiana:  {ss:74,pop:"0.18 Cr",crimes:["FRAUD","SHOPLIFTING","SEXUAL ASSAULT"],types:{"FRAUD":8,"SHOPLIFTING":6,"SEXUAL ASSAULT":6,"FIREARM OFFENSE":6,"ARSON":5,"Other":69},best:"1pm–4pm",worst:"8am–11am",yearly:{2020:157,2021:174,2022:156,2023:176},trend:-13,closure:53,total:663,weapon:"Blunt Object",zones:[{name:"Model Town",score:76},{name:"BRS Nagar",score:72},{name:"Haibowal",score:55},{name:"Focal Point",score:48},{name:"Civil Lines",score:78}]},
  Agra:      {ss:74,pop:"0.18 Cr",crimes:["ASSAULT","ARSON","PUBLIC INTOXICATION"],types:{"ASSAULT":6,"ARSON":6,"PUBLIC INTOXICATION":6,"FIREARM OFFENSE":5,"ROBBERY":5,"Other":72},best:"8am–11am",worst:"9am–12pm",yearly:{2020:177,2021:156,2022:166,2023:162},trend:2,closure:49,total:661,weapon:"Blunt Object",zones:[{name:"Taj Ganj",score:55},{name:"Sikandra",score:70},{name:"Shahganj",score:50},{name:"Dayalbagh",score:74},{name:"Baluganj",score:60}]},
  Visakhapatnam:{ss:75,pop:"0.2 Cr",crimes:["VANDALISM","FRAUD","TRAFFIC VIOLATION"],types:{"VANDALISM":6,"FRAUD":6,"TRAFFIC VIOLATION":6,"DRUG OFFENSE":6,"ARSON":6,"Other":70},best:"7am–10am",worst:"10am–1pm",yearly:{2020:167,2021:150,2022:152,2023:149},trend:2,closure:51,total:618,weapon:"Blunt Object",zones:[{name:"MVP Colony",score:80},{name:"Gajuwaka",score:58},{name:"Dwaraka Nagar",score:74},{name:"Seethammadhara",score:78},{name:"Pedagantyada",score:55}]},
  Bhopal:    {ss:75,pop:"0.2 Cr",crimes:["KIDNAPPING","ASSAULT","PUBLIC INTOXICATION"],types:{"KIDNAPPING":6,"ASSAULT":6,"PUBLIC INTOXICATION":6,"DOMESTIC VIOLENCE":6,"FRAUD":6,"Other":70},best:"5pm–8pm",worst:"10pm–1am",yearly:{2020:151,2021:148,2022:128,2023:167},trend:-30,closure:48,total:594,weapon:"Firearm",zones:[{name:"MP Nagar",score:72},{name:"Habibganj",score:78},{name:"Bhadbhada",score:65},{name:"Kolar Road",score:60},{name:"Berasia Road",score:50}]},
  Ghaziabad: {ss:75,pop:"0.17 Cr",crimes:["TRAFFIC VIOLATION","DOMESTIC VIOLENCE","ROBBERY"],types:{"TRAFFIC VIOLATION":6,"DOMESTIC VIOLENCE":6,"ROBBERY":6,"PUBLIC INTOXICATION":5,"DRUG OFFENSE":5,"Other":72},best:"9pm–12am",worst:"2am–5am",yearly:{2020:158,2021:156,2022:143,2023:164},trend:-15,closure:49,total:621,weapon:"Poison",zones:[{name:"Indirapuram",score:70},{name:"Raj Nagar",score:68},{name:"Loni",score:45},{name:"Kaushambi",score:72},{name:"Vasundhara",score:74}]},
  Thane:     {ss:75,pop:"0.22 Cr",crimes:["CYBERCRIME","BURGLARY","ROBBERY"],types:{"CYBERCRIME":7,"BURGLARY":6,"ROBBERY":6,"VEHICLE STOLEN":6,"KIDNAPPING":5,"Other":70},best:"3pm–6pm",worst:"9am–12pm",yearly:{2020:167,2021:150,2022:147,2023:155},trend:-5,closure:54,total:619,weapon:"Explosives",zones:[{name:"Thane West",score:72},{name:"Kopri",score:60},{name:"Manpada",score:78},{name:"Naupada",score:65},{name:"Majiwada",score:58}]},
  Indore:    {ss:75,pop:"0.22 Cr",crimes:["FIREARM OFFENSE","ASSAULT","ROBBERY"],types:{"FIREARM OFFENSE":6,"ASSAULT":6,"ROBBERY":6,"VEHICLE STOLEN":5,"HOMICIDE":5,"Other":72},best:"9am–12pm",worst:"5pm–8pm",yearly:{2020:164,2021:153,2022:156,2023:133},trend:15,closure:50,total:606,weapon:"Poison",zones:[{name:"Vijay Nagar",score:75},{name:"Palasia",score:70},{name:"Rajwada",score:52},{name:"Aerodrome",score:72},{name:"Bicholi Hapsi",score:65}]},
  Patna:     {ss:75,pop:"0.2 Cr",crimes:["SEXUAL ASSAULT","CYBERCRIME","VANDALISM"],types:{"SEXUAL ASSAULT":6,"CYBERCRIME":6,"VANDALISM":6,"DOMESTIC VIOLENCE":5,"EXTORTION":5,"Other":72},best:"5pm–8pm",worst:"11pm–2am",yearly:{2020:149,2021:157,2022:147,2023:132},trend:10,closure:49,total:585,weapon:"Blunt Object",zones:[{name:"Boring Road",score:72},{name:"Kankarbagh",score:62},{name:"Rajendra Nagar",score:68},{name:"Phulwari",score:52},{name:"Danapur",score:58}]},
  Meerut:    {ss:79,pop:"0.15 Cr",crimes:["SEXUAL ASSAULT","DOMESTIC VIOLENCE","BURGLARY"],types:{"SEXUAL ASSAULT":7,"DOMESTIC VIOLENCE":7,"BURGLARY":7,"FIREARM OFFENSE":6,"TRAFFIC VIOLATION":6,"Other":67},best:"11am–2pm",worst:"9am–12pm",yearly:{2020:99,2021:63,2022:86,2023:88},trend:-2,closure:46,total:336,weapon:"Other",zones:[{name:"Shastri Nagar",score:75},{name:"Kanker Khera",score:65},{name:"Pallavpuram",score:72},{name:"Lisari Gate",score:55},{name:"Civil Lines",score:78}]},
  Varanasi:  {ss:79,pop:"0.15 Cr",crimes:["BURGLARY","ARSON","FIREARM OFFENSE"],types:{"BURGLARY":6,"ARSON":6,"FIREARM OFFENSE":6,"KIDNAPPING":6,"DOMESTIC VIOLENCE":5,"Other":71},best:"11pm–2am",worst:"3pm–6pm",yearly:{2020:86,2021:74,2022:86,2023:64},trend:26,closure:49,total:310,weapon:"Knife",zones:[{name:"Sigra",score:72},{name:"Lanka",score:78},{name:"Godowlia",score:55},{name:"Shivpur",score:65},{name:"Sarnath",score:80}]},
  Kalyan:    {ss:79,pop:"0.15 Cr",crimes:["TRAFFIC VIOLATION","PUBLIC INTOXICATION","DRUG OFFENSE"],types:{"TRAFFIC VIOLATION":8,"PUBLIC INTOXICATION":7,"DRUG OFFENSE":6,"ASSAULT":6,"FRAUD":6,"Other":67},best:"2am–5am",worst:"10am–1pm",yearly:{2020:80,2021:70,2022:94,2023:72},trend:23,closure:46,total:316,weapon:"Knife",zones:[{name:"Kalyan West",score:72},{name:"Kalyan East",score:68},{name:"Titwala",score:62},{name:"Ambernath",score:65},{name:"Ulhasnagar",score:58}]},
  Nashik:    {ss:79,pop:"0.16 Cr",crimes:["ASSAULT","SEXUAL ASSAULT","KIDNAPPING"],types:{"ASSAULT":7,"SEXUAL ASSAULT":7,"KIDNAPPING":6,"CYBERCRIME":6,"ARSON":6,"Other":68},best:"9am–12pm",worst:"2am–5am",yearly:{2020:75,2021:74,2022:91,2023:79},trend:13,closure:49,total:319,weapon:"Other",zones:[{name:"Nashik Road",score:72},{name:"Satpur",score:70},{name:"Cidco",score:78},{name:"Panchavati",score:60},{name:"Deolali",score:74}]},
  Faridabad: {ss:79,pop:"0.17 Cr",crimes:["IDENTITY THEFT","ASSAULT","DOMESTIC VIOLENCE"],types:{"IDENTITY THEFT":7,"ASSAULT":7,"DOMESTIC VIOLENCE":7,"VANDALISM":7,"KIDNAPPING":6,"Other":66},best:"8pm–11pm",worst:"7am–10am",yearly:{2020:74,2021:73,2022:76,2023:80},trend:-5,closure:53,total:303,weapon:"Other",zones:[{name:"NIT Faridabad",score:74},{name:"Sector 15",score:72},{name:"Old Faridabad",score:55},{name:"Ballabhgarh",score:68},{name:"Tigaon",score:62}]},
  Srinagar:  {ss:79,pop:"0.14 Cr",crimes:["VEHICLE STOLEN","PUBLIC INTOXICATION","EXTORTION"],types:{"VEHICLE STOLEN":7,"PUBLIC INTOXICATION":6,"EXTORTION":6,"DRUG OFFENSE":6,"COUNTERFEITING":5,"Other":70},best:"11am–2pm",worst:"12am–3am",yearly:{2020:88,2021:75,2022:84,2023:78},trend:7,closure:46,total:325,weapon:"Explosives",zones:[{name:"Lal Chowk",score:60},{name:"Jawahar Nagar",score:75},{name:"Rajbagh",score:78},{name:"Hyderpora",score:72},{name:"Bemina",score:65}]},
  Vasai:     {ss:79,pop:"0.12 Cr",crimes:["EXTORTION","DRUG OFFENSE","COUNTERFEITING"],types:{"EXTORTION":7,"DRUG OFFENSE":6,"COUNTERFEITING":6,"TRAFFIC VIOLATION":6,"IDENTITY THEFT":6,"Other":69},best:"12am–3am",worst:"7am–10am",yearly:{2020:76,2021:81,2022:83,2023:87},trend:-5,closure:48,total:327,weapon:"Explosives",zones:[{name:"Vasai West",score:72},{name:"Vasai East",score:68},{name:"Nalasopara",score:60},{name:"Virar",score:74},{name:"Nala Sopara",score:65}]},
  Rajkot:    {ss:80,pop:"0.17 Cr",crimes:["EXTORTION","ROBBERY","HOMICIDE"],types:{"EXTORTION":7,"ROBBERY":6,"HOMICIDE":6,"DOMESTIC VIOLENCE":6,"KIDNAPPING":6,"Other":69},best:"9pm–12am",worst:"8pm–11pm",yearly:{2020:63,2021:64,2022:70,2023:76},trend:-9,closure:52,total:273,weapon:"Firearm",zones:[{name:"Kalawad Road",score:80},{name:"Gondal Road",score:74},{name:"Mavdi",score:72},{name:"Aji Dam",score:68},{name:"University Road",score:82}]},
};
 
const WOMEN = {
  "Uttar Pradesh":    {score:10,rape:6100, dowry:4670,assault:14606,cruelty:17562,kidnap:19474,total:62412,worst:"Cruelty & Kidnapping"},
  "West Bengal":      {score:15,rape:3370, dowry:962, assault:9826, cruelty:36232,kidnap:7660, total:58050,worst:"Cruelty by Husband"},
  "Rajasthan":        {score:18,rape:6570, dowry:906, assault:9658, cruelty:30188,kidnap:8094, total:55416,worst:"Cruelty & Rape"},
  "Andhra Pradesh":   {score:24,rape:3270, dowry:984, assault:15734,cruelty:30168,kidnap:1316, total:51472,worst:"Cruelty & Assault"},
  "Maharashtra":      {score:33,rape:6126, dowry:640, assault:16264,cruelty:17084,kidnap:3748, total:43862,worst:"Assault & Cruelty"},
  "Madhya Pradesh":   {score:35,rape:8670, dowry:1552,assault:16504,cruelty:9976, kidnap:5746, total:42448,worst:"Rape & Assault"},
  "Assam":            {score:45,rape:3874, dowry:340, assault:8642, cruelty:17272,kidnap:4620, total:34748,worst:"Cruelty & Rape"},
  "Gujarat":          {score:59,rape:1464, dowry:58,  assault:2486, cruelty:15624,kidnap:4460, total:24092,worst:"Cruelty by Husband"},
  "Delhi UT":         {score:59,rape:3272, dowry:288, assault:7030, cruelty:6066, kidnap:7218, total:23874,worst:"Rape & Kidnapping"},
  "Bihar":            {score:60,rape:2256, dowry:2364,assault:4280, cruelty:9066, kidnap:5220, total:23186,worst:"Dowry & Cruelty"},
  "Odisha":           {score:60,rape:3664, dowry:790, assault:9334, cruelty:5584, kidnap:4036, total:23408,worst:"Rape & Assault"},
  "Kerala":           {score:62,rape:2442, dowry:42,  assault:8724, cruelty:9640, kidnap:370,  total:21218,worst:"Cruelty & Assault"},
  "Karnataka":        {score:64,rape:2060, dowry:554, assault:7826, cruelty:6552, kidnap:2718, total:19710,worst:"Assault & Cruelty"},
  "Haryana":          {score:68,rape:1942, dowry:526, assault:5014, cruelty:7234, kidnap:2020, total:16736,worst:"Cruelty & Rape"},
  "Chhattisgarh":     {score:72,rape:2760, dowry:218, assault:7274, cruelty:2362, kidnap:1010, total:13624,worst:"Rape & Assault"},
  "Tamil Nadu":       {score:73,rape:1846, dowry:236, assault:2542, cruelty:4942, kidnap:3032, total:12598,worst:"Cruelty & Rape"},
  "Punjab":           {score:77,rape:1776, dowry:252, assault:2622, cruelty:3482, kidnap:1442, total:9574, worst:"Cruelty & Rape"},
  "Jharkhand":        {score:77,rape:2408, dowry:614, assault:2260, cruelty:4168, kidnap:640,  total:10090,worst:"Rape & Cruelty"},
  "J&K":              {score:81,rape:756,  dowry:14,  assault:4412, cruelty:856,  kidnap:264,  total:6302, worst:"Assault"},
  "Himachal Pradesh": {score:86,rape:500,  dowry:0,   assault:1244, cruelty:656,  kidnap:322,  total:2722, worst:"Rape & Assault"},
  "Goa":              {score:89,rape:172,  dowry:0,   assault:408,  cruelty:80,   kidnap:56,   total:716,  worst:"Assault"},
};
 
const CITY_COORDS = {
  Delhi:[28.6139,77.2090],
  Mumbai:[19.0760,72.8777],
  Bangalore:[12.9716,77.5946],
  Hyderabad:[17.3850,78.4867],
  Chennai:[13.0827,80.2707],
  Kolkata:[22.5726,88.3639],
  Pune:[18.5204,73.8567],
  Ahmedabad:[23.0225,72.5714],
  Jaipur:[26.9124,75.7873],
  Lucknow:[26.8467,80.9462],
  Surat:[21.1702,72.8311],
  Kanpur:[26.4499,80.3319],
  Nagpur:[21.1458,79.0882],
  Ludhiana:[30.9010,75.8573],
  Agra:[27.1767,78.0081],
  Visakhapatnam:[17.6868,83.2185],
  Bhopal:[23.2599,77.4126],
  Ghaziabad:[28.6692,77.4538],
  Thane:[19.2183,72.9781],
  Indore:[22.7196,75.8577],
  Patna:[25.5941,85.1376],
  Meerut:[28.9845,77.7064],
  Varanasi:[25.3176,82.9739],
  Kalyan:[19.2403,73.1305],
  Nashik:[19.9975,73.7898],
  Faridabad:[28.4089,77.3178],
  Srinagar:[34.0837,74.7973],
  Vasai:[19.4910,72.8054],
  Rajkot:[22.3039,70.8022]
};
 
const DC = ["#6366f1","#f59e0b","#22c55e","#ef4444","#8b5cf6","#06b6d4"];
 
// ── State ──
let mode='city', selCity='Delhi', selState='Uttar Pradesh', cityTab='overview', minScore=0;
 
// ── Helpers ──
const $ = id => document.getElementById(id);
const fmt = n => n.toLocaleString('en-IN');
function sColor(s){ return s>=75?'#22c55e':s>=60?'#84cc16':s>=45?'#f59e0b':s>=30?'#f97316':'#ef4444' }
function sLabel(s){ return s>=75?'Safe':s>=60?'Moderate':s>=45?'Caution':s>=30?'High Risk':'Danger' }
 
// ── Canvas ring ──
function ring(id, score, color, sz=108){
  const c=$('ring-'+id); if(!c) return;
  c.width=sz; c.height=sz;
  const ctx=c.getContext('2d'), cx=sz/2, cy=sz/2, r=sz*.4, lw=sz*.072;
  ctx.clearRect(0,0,sz,sz);
  ctx.beginPath(); ctx.arc(cx,cy,r,0,2*Math.PI); ctx.strokeStyle='rgba(255,255,255,0.07)'; ctx.lineWidth=lw; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+(score/100)*2*Math.PI);
  ctx.strokeStyle=color; ctx.lineWidth=lw; ctx.lineCap='round'; ctx.stroke();
  ctx.fillStyle=color; ctx.font=`bold ${sz*.2}px Syne,sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(score,cx,cy-sz*.05);
  ctx.fillStyle='#9ca3af'; ctx.font=`${sz*.082}px DM Sans,sans-serif`; ctx.fillText(sLabel(score),cx,cy+sz*.13);
}
 
// ── Canvas donut ──
function donut(id, data){
  const c=$('donut-'+id); if(!c) return;
  const sz=98; c.width=sz; c.height=sz;
  const ctx=c.getContext('2d'), cx=sz/2, cy=sz/2, r=sz*.36, inn=sz*.18;
  const total=Object.values(data).reduce((a,b)=>a+b,0);
  let cum=0;
  Object.entries(data).forEach(([k,v],i)=>{
    const p=v/total, s=-Math.PI/2+cum*2*Math.PI, e=s+p*2*Math.PI;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,s,e); ctx.closePath();
    ctx.fillStyle=DC[i%DC.length]; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,r,s,e); ctx.lineWidth=1.5; ctx.strokeStyle='#111827'; ctx.stroke();
    cum+=p;
  });
  ctx.beginPath(); ctx.arc(cx,cy,inn,0,2*Math.PI); ctx.fillStyle='#111827'; ctx.fill();
}
 
// ── Canvas year chart ──
function yearChart(id, data){
  const c = $('yr-'+id); 
  if(!c) return;

  // 👇 get actual display size
  const rect = c.getBoundingClientRect();

  const scale = window.devicePixelRatio || 2;

  // ✅ set real resolution
  c.width = rect.width * scale;
  c.height = 200 * scale;

  const ctx = c.getContext('2d');

  // ✅ scale for sharpness
  ctx.scale(scale, scale);

  const W = rect.width;
  const H = 200;

  ctx.clearRect(0,0,W,H);

  const years = Object.keys(data);
  const vals = Object.values(data);

  const mx = Math.max(...vals);
  const mn = Math.min(...vals);

  const pad = 20;

  const pts = years.map((y,i)=>({
    x: pad + (i/(years.length-1))*(W-pad*2),
    y: pad + (1-(vals[i]-mn)/(mx-mn||1))*(H-pad*2),
    val: vals[i],
    year: y
  }));

  // line
  ctx.strokeStyle='#6366f1';
  ctx.lineWidth=2;
  ctx.lineJoin='round';
  ctx.lineCap='round';

  ctx.beginPath();
  pts.forEach((p,i)=> i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
  ctx.stroke();

  // points + labels
  pts.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,3,0,2*Math.PI);
    ctx.fillStyle='#6366f1';
    ctx.fill();

    ctx.strokeStyle='#111827';
    ctx.lineWidth=1.5;
    ctx.stroke();

    ctx.fillStyle='#6b7280';
    ctx.font='10px DM Sans';
    ctx.textAlign='center';
    ctx.fillText(p.year, p.x, H-5);

    ctx.fillStyle='#e5e7eb';
    ctx.fillText(fmt(p.val), p.x, p.y-8);
  });
}
 
// ── SVG Map ──
let map;

function buildMap(){
  if(!map){
    map = L.map('mapArea').setView([22.97, 78.65], 5);

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenTopoMap'
    }).addTo(map);
  }

  addMarkers();   // ✅ ALWAYS CALL
}
function addMarkers(){
  Object.keys(CITY_COORDS).forEach(city => {
    const [lat, lng] = CITY_COORDS[city];
    const d = CITIES[city];
      if(!d) return;

    const isSelected = city === selCity;

    const marker = L.circleMarker([lat, lng], {
      radius: isSelected ? 12 : 7,              // 👈 highlight selected
      fillColor: sColor(d.ss),
      color: isSelected ? "#ffffff" : "#111827",
      weight: isSelected ? 2 : 1,
      fillOpacity: isSelected ? 1 : 0.8
    }).addTo(map);

    marker.bindPopup(`
      <b>${city}</b><br>
      Safety: ${d.ss}<br>
      Cases: ${d.total}
    `);

    marker.on('click', () => pickCity(city));
  });
}

// ── Sidebar list ──
function buildList(){
  const el=$('cityList');
  if(mode==='city'){
    const sorted=Object.keys(CITIES).filter(c=>CITIES[c].ss>=minScore).sort((a,b)=>CITIES[a].ss-CITIES[b].ss);
    el.innerHTML=sorted.map(c=>{
      const d=CITIES[c],col=sColor(d.ss),sel=c===selCity;
      return `<div class="city-item${sel?' sel':''}" onclick="pickCity('${c}')">
        <div><div class="ci-name">${c}</div><div class="ci-sub">${fmt(d.total)} cases · ${d.pop}</div></div>
        <div><div class="ci-score" style="color:${col}">${d.ss}</div><div class="ci-lbl" style="color:${col}">${sLabel(d.ss)}</div></div>
      </div>`;
    }).join('');
  } else {
    const sorted=Object.keys(WOMEN).sort((a,b)=>WOMEN[a].score-WOMEN[b].score);
    el.innerHTML=`<div class="sb-legend">
      <p>NCRB Crimes Against Women (2013)</p>
      ${[['#ef4444','Danger'],['#f97316','High Risk'],['#f59e0b','Caution'],['#22c55e','Safe']].map(([c,l])=>
        `<div class="l-row"><div class="l-dot" style="background:${c}"></div><span style="font-size:9px;color:#6b7280">${l}</span></div>`).join('')}
    </div>`+sorted.map(s=>{
      const d=WOMEN[s],col=sColor(d.score),sel=s===selState;
      return `<div class="city-item${sel?' sel wpink':''}" onclick="pickState('${s}')">
        <div><div class="ci-name">${s}</div><div class="ci-sub">${fmt(d.total)} cases</div></div>
        <div><div class="ci-score" style="color:${col}">${d.score}</div><div class="ci-lbl" style="color:${col}">${sLabel(d.score)}</div></div>
      </div>`;
    }).join('');
  }
}
 
// ── City Panel ──
function renderCity(){
  const d = CITIES[selCity];
    if(!d) return;
    const col = sColor(d.ss);
  const trendHtml=d.trend>=0
    ?`<span style="color:#22c55e">↑ ${d.trend}% safer vs last yr</span>`
    :`<span style="color:#ef4444">↓ ${Math.abs(d.trend)}% worse vs last yr</span>`;
 
  const tabs=['overview','zones','trends','compare'].map(t=>
    `<button class="tab-btn${cityTab===t?' active':''}" onclick="setTab('${t}')">${t}</button>`).join('');
 
  let body='';
 
  if(cityTab==='overview'){
    const crNums=d.crimes.map((c,i)=>`<div class="cr-item">
      <div class="cr-num" style="background:${['#ef444430','#f9731630','#f59e0b30'][i]};border:1px solid ${['#ef4444','#f97316','#f59e0b'][i]}50;color:${['#ef4444','#f97316','#f59e0b'][i]}">${i+1}</div>
      <span style="font-size:12px;color:#d1d5db">${c}</span></div>`).join('');
 
    const dLeg=Object.entries(d.types).map(([k,v],i)=>`<div class="dl-item">
      <div class="dl-dot" style="background:${DC[i%DC.length]}"></div>
      <span class="dl-name">${k}</span><span class="dl-pct">${v}%</span></div>`).join('');
 
    const advBg=d.ss<35?'rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25)'
               :d.ss<60?'rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25)'
               :'rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25)';
    const advTxt=d.ss>=75?`${selCity} is relatively safe. Stay alert in busy markets.`
                :d.ss>=60?`${selCity} has moderate safety. Extra caution during ${d.worst}.`
                :d.ss>=45?`Exercise caution in ${selCity}, especially during ${d.worst}.`
                :d.ss>=30?`${selCity} has elevated crime. Avoid isolated areas and late nights.`
                :`High alert in ${selCity}. Avoid ${d.worst} and travel in groups.`;
 
    body=`
      <div class="g3">
        <div class="sc"><div class="sc-lbl">SAFEST TIME</div><div class="sc-val" style="color:#22c55e">🌅 ${d.best}</div></div>
        <div class="sc"><div class="sc-lbl">RISKY TIME</div><div class="sc-val" style="color:#ef4444">🌙 ${d.worst}</div></div>
        <div class="sc"><div class="sc-lbl">TOP WEAPON</div><div class="sc-val" style="color:#f59e0b">⚠️ ${d.weapon}</div></div>
      </div>
      <div class="g2">
        <div class="card"><div class="card-t">TOP CRIMES</div>${crNums}</div>
        <div class="card"><div class="card-t">CRIME BREAKDOWN</div>
          <div class="donut-wrap"><canvas id="donut-main" style="flex-shrink:0"></canvas><div class="d-legend">${dLeg}</div></div></div>
      </div>
      <div class="adv" style="background:${advBg}">
        <div class="adv-t" style="color:${col}">💡 SAFETY ADVISORY</div>
        <div class="adv-txt">${advTxt}</div></div>`;
  }
 
  else if(cityTab==='zones'){
    const zItems=d.zones.map(z=>{
      const zc=sColor(z.score);
      return `<div class="zone-item">
        <div class="zone-row">
          <span class="zone-name">${z.name}</span>
          <div class="zone-meta"><span class="zone-lbl" style="color:${zc}">${sLabel(z.score)}</span><span class="zone-score" style="color:${zc}">${z.score}</span></div>
        </div>
        <div class="zone-bar"><div class="zone-bar-fill" style="width:${z.score}%;background:${zc}"></div></div>
      </div>`;}).join('');
    body=`<div class="card"><div class="card-t">SAFETY BY AREA — ${selCity.toUpperCase()}</div>${zItems}</div>
      <div class="sc" style="margin-bottom:11px">
        <div class="sc-lbl">ABOUT ZONE DATA</div>
        <div style="font-size:11px;color:var(--muted2);margin-top:4px;line-height:1.6">Zone scores are derived from relative crime density within the city. Scores above 70 indicate safer neighbourhoods.</div>
      </div>`;
  }
 
  else if(cityTab==='trends'){
    body=`
      <div class="card"><div class="card-t">REPORTED CRIMES 2020–2023</div>
        <canvas id="yr-main" style="width:100%"></canvas>
        <div style="font-size:11px;color:var(--muted);margin-top:8px">${d.trend>=0?`📉 ${d.trend}% fewer crimes in 2023 — improving.`:`📈 ${Math.abs(d.trend)}% more crimes in 2023 — worsening.`}</div>
      </div>
      <div class="card"><div class="card-t">CASE CLOSURE RATE</div>
        <div class="bar-row" style="margin-bottom:6px">
          <div class="bar-track"><div class="bar-fill" style="width:${d.closure}%;background:var(--accent)"></div></div>
          <div class="bar-val">${d.closure}%</div>
        </div>
        <div style="font-size:10px;color:#4b5563">Out of every 100 cases, ${d.closure} are solved.</div>
      </div>
      <div class="g3">
        <div class="sc"><div class="sc-lbl">2020 CASES</div><div class="sc-val" style="color:var(--muted2)">${fmt(d.yearly[2020])}</div></div>
        <div class="sc"><div class="sc-lbl">2022 CASES</div><div class="sc-val" style="color:var(--muted2)">${fmt(d.yearly[2022])}</div></div>
        <div class="sc"><div class="sc-lbl">2023 CASES</div><div class="sc-val" style="color:${sColor(d.ss)}">${fmt(d.yearly[2023])}</div></div>
      </div>`;
  }
 
  else if(cityTab==='compare'){
    const rows=Object.keys(CITIES).sort((a,b)=>CITIES[a].ss-CITIES[b].ss).map(c=>{
      const cl=sColor(CITIES[c].ss), sel=c===selCity;
      return `<div class="cmp-item${sel?' sel':''}" onclick="pickCity('${c}')">
        <div class="cmp-row"><span class="cmp-name">${c}</span><span class="cmp-score" style="color:${cl}">${CITIES[c].ss}</span></div>
        <div class="mb3"><div class="mb3f" style="width:${CITIES[c].ss}%;background:${sel?'var(--accent)':cl}"></div></div>
      </div>`;}).join('');
    body=`<div class="card"><div class="card-t">ALL 29 CITIES — SAFETY RANKING</div>${rows}</div>`;
  }
 
  $('mainPanel').innerHTML=`
    <div class="c-header">
      <div>
        <div class="c-title">${selCity}</div>
        <div class="c-meta">
          <span>Pop: <span>${d.pop}</span></span>
          <span>Cases: <span>${fmt(d.total)}</span></span>
          <span>Solved: <span>${d.closure}%</span></span>
          ${trendHtml}
        </div>
      </div>
      <div class="ring-wrap"><canvas id="ring-main"></canvas></div>
    </div>
    <div class="tabs">${tabs}</div>
    ${body}`;
 
  requestAnimationFrame(()=>{
    ring('main', d.ss, sColor(d.ss), 108);
    if(cityTab==='overview') donut('main', d.types);
    if(cityTab==='trends')   yearChart('main', d.yearly);
  });
}
 
// ── Women Panel ──
function renderWomen(){
  const d=WOMEN[selState], col=sColor(d.score);
  const maxC=Math.max(...Object.values(WOMEN).map(x=>x.cruelty));
  const bars=[
    ['Cruelty by Husband / Relatives',d.cruelty,'#ec4899'],
    ['Assault on Women',              d.assault,'#f97316'],
    ['Kidnapping & Abduction',        d.kidnap, '#f59e0b'],
    ['Rape',                          d.rape,   '#ef4444'],
    ['Dowry Deaths',                  d.dowry,  '#8b5cf6'],
  ].map(([l,v,c])=>`<div class="wb-wrap">
    <div class="wb-row"><span class="wb-lbl">${l}</span><span class="wb-val" style="color:${c}">${fmt(v)}</span></div>
    <div class="wb-track"><div class="wb-fill" style="width:${(v/maxC)*100}%;background:${c}"></div></div>
  </div>`).join('');
 
  const stRows=Object.keys(WOMEN).sort((a,b)=>WOMEN[a].score-WOMEN[b].score).map(s=>{
    const cl=sColor(WOMEN[s].score), sel=s===selState;
    return `<div class="cmp-item${sel?' sel':''}" onclick="pickState('${s}')">
      <div class="cmp-row"><span class="cmp-name">${s}</span><span class="cmp-score" style="color:${cl}">${WOMEN[s].score}</span></div>
      <div class="mb3"><div class="mb3f" style="width:${WOMEN[s].score}%;background:${sel?'var(--pink)':cl}"></div></div>
    </div>`;}).join('');
 
  const advTxt=d.score<=25?`${selState} reports the highest women crime numbers in India. Cruelty by family members and sexual violence are the dominant categories. Policy intervention urgently needed.`
              :d.score<=50?`${selState} has significantly high women crimes. Primary concern: ${d.worst}. Awareness and legal aid programs are critical.`
              :d.score<=70?`${selState} has moderate women safety concerns. Key area: ${d.worst}.`
              :`${selState} shows relatively lower women crime rates compared to the national average.`;
 
  $('mainPanel').innerHTML=`
    <div class="c-header">
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
          <span style="font-size:16px">♀</span>
          <div class="c-title" style="font-size:21px">${selState}</div>
        </div>
        <div class="c-meta">
          <span>Total: <span style="color:#f9a8d4;font-weight:600">${fmt(d.total)} cases</span> (2013)</span>
          <span style="color:#f59e0b">⚠️ Most prevalent: ${d.worst}</span>
        </div>
      </div>
      <div class="ring-wrap"><canvas id="ring-women"></canvas><div class="ring-sub">Women Safety</div></div>
    </div>
    <div class="g2">
      <div class="card"><div class="card-t">CRIME BREAKDOWN</div>${bars}</div>
      <div class="card"><div class="card-t">KEY STATS</div>
        ${[['Rape Cases',d.rape,'#ef4444'],['Dowry Deaths',d.dowry,'#8b5cf6'],['Assault Cases',d.assault,'#f97316'],['Cruelty Cases',d.cruelty,'#ec4899'],['Kidnapping',d.kidnap,'#f59e0b']].map(([l,v,c])=>`
        <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05)">
          <span style="font-size:11px;color:var(--muted2)">${l}</span>
          <span style="font-size:12px;font-weight:600;color:${c}">${fmt(v)}</span>
        </div>`).join('')}
      </div>
    </div>
    <div class="card"><div class="card-t">ALL STATES — WOMEN SAFETY RANKING</div>${stRows}</div>
    <div class="adv" style="background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.25)">
      <div class="adv-t" style="color:#f9a8d4">💡 CONTEXT & ADVISORY</div>
      <div class="adv-txt" style="color:#fce7f3">${advTxt}</div>
    </div>`;
 
  requestAnimationFrame(()=>{ ring('women', d.score, sColor(d.score), 108); });
}
 
// ── Actions ──
function setMode(m){
  mode=m;
  $('btnCity').classList.toggle('active', m==='city');
  $('btnWomen').classList.toggle('active', m==='women');
  $('btnWomen').classList.toggle('wpink', m==='women');
  if(m==='city'){
  $('mapArea').style.display = 'block';
  buildMap();
}else{
  $('mapArea').style.display = 'none';   // 👈 hide only
}
  buildList(); render();
}
function pickCity(c){ 
  selCity=c; 
  cityTab='overview'; 

  updateMarkers();   // ✅ NEW

  buildList(); 
  renderCity();
  const [lat, lng] = CITY_COORDS[c];
  map.setView([lat, lng], 7);
}
function updateMarkers(){
  if(!map) return;

  map.eachLayer(layer => {
    if(layer instanceof L.CircleMarker){
      map.removeLayer(layer);
    }
  });
  addMarkers();
}
function pickState(s){ selState=s; buildList(); renderWomen(); }
function setTab(t){ cityTab=t; renderCity(); }
function filterChange(v){ minScore=+v; $('filter-val').textContent=v+'+'; buildList(); }
function render(){ mode==='city'?renderCity():renderWomen(); }
 
// ── Search ──
$('searchInput').addEventListener('input',function(){
  const q=this.value.toLowerCase().trim();
  const dd=$('srch-dd');
  if(!q){dd.style.display='none';return;}
  const src=mode==='city'?Object.keys(CITIES):Object.keys(WOMEN);
  const matches=src.filter(x=>x.toLowerCase().includes(q));
  if(!matches.length){dd.style.display='none';return;}
  dd.innerHTML=matches.map(x=>{
    const sc=mode==='city'?CITIES[x].ss:WOMEN[x].score, cl=sColor(sc);
    return `<div onclick="srchPick('${x}')"><span>${x}</span><span style="color:${cl};font-weight:600;font-size:11px">${sc} · ${sLabel(sc)}</span></div>`;
  }).join('');
  dd.style.display='block';
});
function srchPick(x){
  mode==='city'?pickCity(x):pickState(x);
  $('searchInput').value=''; $('srch-dd').style.display='none';
}
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))$('srch-dd').style.display='none';});
 
// ── Init ──
buildMap(); buildList(); render();
