const { Tasks } = require("../models/db");



async function CreateHra(req, res) {

    try {
        const {
            basic_sal,
            rent_paid,
            HRA,
            is_metro

        } = req.body;

        if (!basic_sal) {
            return res.status(400).json({ error: 'basic salary is required in the request body' });

        }


        const calculateHRA = calcHRA(basic_sal, rent_paid, HRA, is_metro);


        //New record after calculation HRA

        const newreq = await Tasks.create({
            basic_sal,
            rent_paid,
            HRA,
            exempt_hra: calculateHRA,
            is_metro
        });

        res.status(201).json({
            newreq,
            message: 'hracreated '

        });

    } catch (error) {
        console.error('error created:', error)
        res.status(500).json({ error: 'An error occurred while making newrequest for calculating Hra' });
    }

}


function calcHRA(basic_sal, rent_paid, HRA, is_metro) {


    if (is_metro == true) {
        cal_sal = (50 / 100) * basic_sal;
        cal_rent = rent_paid - (0.1 * basic_sal);


    } else {
        cal_sal = (40 / 100) * basic_sal;
        cal_rent = rent_paid - (0.1 * basic_sal);
    }

    return Math.min(cal_sal, HRA, cal_rent);

}


module.exports = {
    CreateHra

};