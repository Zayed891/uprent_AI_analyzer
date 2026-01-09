
export const calculateUrgency = (application)=>{
    let score =0;

    if(application.profileComplete){
        score += 30;
    }

    if(application.timeToApplyMinutes<15){
        score +=30;
    }

    if(!application.landLordResponded){
        score +=20;
    }

    const hoursSinceApplied = (Date.now() - new Date(application.appliedAt))/(1000*60*60);

    if(hoursSinceApplied>12){
        score +=20;
    }

    return score;
}