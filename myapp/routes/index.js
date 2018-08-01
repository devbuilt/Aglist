var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AGLIST',
                        titleintro:'Welcome to Aglist your online directory for Ag companies in Monterey & Santa Cruz County!',

                        business: 'Crystal Bay Farm',
                        description: 'Certified Organic since 1997',
                        address: '40 Zils Rd, Watsonville, CA 95076',
                        phone: '831-724-4137',
                        web:'EMAIL',

                        business1: 'Gizdich Ranch',
                        description1: 'Farm & ranch featuring apples, berries, baked goods & juices, plus a gift shop & an antique shop',
                        address1: '55 Peckham Rd, Watsonville, CA 95076',
                        phone1: '831-722-1056',
                        web1: 'website',

                        business2: 'Beach Street Farms',
                        description2: 'Berries',
                        address2: '239 W Riverside Dr, Watsonville, CA 95077',
                        phone2: '(831) 763-4401',
                        web2:'Website',

                        business3: 'California Giant Berry Farms',
                        description3: 'Berries',
                        address3: '75 Sakata Ln, Watsonville, CA 95076',
                        phone3: '(831) 728-1965',
                        web3:'Website',

                        business4: 'High Ground Organics',
                        description4: 'Berries',
                        address4: '521 Harkins Slough Rd, Watsonville, CA 95076',
                        phone4: '(831) 786-0286',
                        web4:'Website',

                        business5: 'Santa Cruz Berry Farming Co',
                        description5: 'Berries',
                        address5: '116 Martinelli St, Watsonville, CA 95076',
                        phone5: '(831) 761-9025',
                        web5:'Website',

                        business6: 'Sundance Berry Farms',
                        description6: 'Berries',
                        address6: '150 Aviation Way #202, Watsonville, CA 95076',
                        phone6: '(831) 763-4633',
                        web6:'Website',

                        business7: 'Colleen Strawberries',
                        description7: 'Berries',
                        address7: '959 Riverside Rd, Watsonville, CA 95076',
                        phone7: '(831) 761-0304',
                        web7:'Website',

                        business8: 'Live Earth Farm: Community Supported Agriculture',
                        description8: 'Berries',
                        address8: '1275 Green Valley Rd, Watsonville, CA 95076',
                        phone8: '(831) 763-2448',
                        web8:'Website',

                        business9: 'Clearview Orchards',
                        description9: 'Berries',
                        address9: '646 Trabing Rd, Watsonville, CA 95076',
                        phone9: '(408) 472-1958',
                        web9:'Website',

                        business10: 'Rodriguez Ranch',
                        description10: 'Berries',
                        address10: '13 Tarpey Rd, Watsonville, CA 95076',
                        phone10: '(831) 726-9008',
                        web10:'Website',

                        business11: "Driscoll's",
                        description11: 'Berries',
                        address11: '345 Westridge Dr, Watsonville, CA 95076',
                        phone11: '(800) 871-3333',
                        web11:'Website',

                        business12: 'Monterey Bay Farms Organic Strawberry Stand',
                        description12: 'Berries',
                        address12: '596 San Andreas Rd, Watsonville, CA 950766',
                        phone12: '(831) 713-7230',
                        web12:'Website',

                        business13: 'The Farm in Salinas',
                        description13: 'Berries',
                        address13: ' Spreckels Blvd, Salinas, CA 93908',
                        phone13: ' (831) 455-2575',
                        web13:'Website',

                        business14: 'Gema Berry Farms',
                        description14: 'Berries',
                        address14: '1032 Capri Way, Salinas, CA 93905',
                        phone14: '(831) 975-4403',
                        web14:'Website',

                        business14: 'Bay View Farms LLC',
                        description14: 'Berries',
                        address14: '375 W Market St, Salinas, CA 93901',
                        phone14: '(831) 443-0484',
                        web14:'Website',

                        business15: 'Naturipe Berry Growers Inc',
                        description15: 'Berries',
                        address15: '1611 Bunker Hill Way #200, Salinas, CA 93906',
                        phone15: ' (831) 722-2430',
                        web15:'Website',

                        business16: 'Norcal Harvesting',
                        description16: 'Berries',
                        address16: '27 Quail Run Cir, Salinas, CA 93907',
                        phone16: ' (831) 422-5230',
                        web16:'Website',

                        business17: 'Eclipse Berry Farms',
                        description17: 'Berries',
                        address17: '133 Rodgers Rd, Salinas, CA 93907',
                        phone17: '(831) 442-2422',
                        web17:'Website',


    });
});

module.exports = router;
