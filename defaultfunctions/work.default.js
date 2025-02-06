const Work = require('../models/Works');

exports.initializeWork = async (pid)=>{
    let defaultWorks = ["Foundation","Masonry","Centering","Flooring","Painting"];
    // let count=1;
    defaultWorks.forEach(async (work) => {
        const newWork = new Work({
            wid:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+Date.now().toString(36),
            name: work,
            pid: pid, 
        });
        // console.log("Work created",count++)
        await newWork.save();
    });
}