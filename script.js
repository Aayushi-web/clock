setInterval(() => {
   
    date= new Date();
htime=date.getHours();
mtime= date.getMinutes();
stime=date.getSeconds();
hrotation=30*htime+mtime/2;
mrotation=6*mtime;
srotation=6*stime;
hours.style.transform=`rotate(${hrotation}deg)`
mins.style.transform=`rotate(${mrotation}deg)`
Sec.style.transform=`rotate(${srotation}deg)`
}, 1000);