function getPdf(){
     let sdate=document.getElementById('startDate').value
     let edate=document.getElementById('endDate').value
      if(sdate=='' || edate=='' || sdate>edate){
           Swal.fire('Invalid Date Formats') 
           return false
        }else{
            return true
            } 
        } 
