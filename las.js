function las() {

    let donebutton = document.getElementById("donebutton"); 
    let part_plan = document.getElementById("partplan");
    let part_real = document.getElementById("partreal");
    let part_remain = parseInt(part_plan.value) - parseInt(part_real.value);
    let cycle_time = document.getElementById("cycletime");
    let cavit_number = document.getElementById("cavitnumber");
    
    let totalSeconds = ((part_remain * parseInt(cycle_time.value)) / parseInt(cavit_number.value));

    let hh = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let mm = Math.floor(totalSeconds / 60);
    let ss = totalSeconds % 60;
      
    alert("Do dokončení produkce zbývá:\n" + hh + " hodin " + mm + " minut " + ss + " sekund " + "\n \nDo konce zakázky chybí vyrobit:\n" + part_remain + " dílů");
  }
  
  donebutton.onclick = las;

 