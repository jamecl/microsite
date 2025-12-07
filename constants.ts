import { ServiceArea, PracticeArea, Testimonial, FAQ, CaseResult, Attorney } from './types';

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'east-macon',
    name: 'East Macon',
    county: 'Bibb',
    shortDescription: 'Serving the communities along Emery Highway and Shurling Drive.',
    fullDescription: 'East Macon is a historic and busy sector of the city. With heavy traffic flowing to and from the Ocmulgee Mounds and the industrial districts, accidents on Emery Highway and Gray Highway are frequent. We represent residents from Fort Hill to Kings Park who have been injured by commercial trucks and negligent drivers cutting through the east side.',
    image: 'https://picsum.photos/800/600?random=11',
    distance: '3 miles',
    accidentHotspots: [
      { name: 'Emery Highway', description: 'A major corridor for logging trucks and commercial vehicles, frequenting severe collisions.' },
      { name: 'Shurling Drive', description: 'Intersection accidents are common near the grocery stores and retail centers.' },
      { name: 'Gray Highway Split', description: 'Confusing lane merges often lead to side-swipe accidents.' }
    ],
    medicalFacilities: [
      { name: 'Atrium Health Navicent', description: 'Located just across the river. We ensure your transport records from the scene to the ER are preserved.' }
    ],
    courtInfo: { name: 'Bibb County Superior Court', description: 'Located downtown. We are in these courtrooms weekly and know the judges and procedures intimately.' },
    zipCodes: ['31217', '31211'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'Patrols East Macon. We can help you obtain body cam footage from deputies who responded to your crash.'
      }
    ],
    directionsFrom: 'Head west on Emery Highway or Shurling Drive toward downtown. Cross the Otis Redding Bridge, turn right onto Cherry Street. We are just blocks away.',
    localFAQs: [
      {
        question: 'I was hit by a truck on Emery Highway. Is the company liable?',
        answer: 'Likely yes. Emery Highway sees heavy industrial traffic. If a commercial truck hit you, we investigate the company\'s logs and maintenance records.'
      },
      {
        question: 'Do you handle accidents near the Ocmulgee Mounds?',
        answer: 'Yes. Tourist traffic often causes unpredictable stops and rear-end collisions in this area.'
      }
    ]
  },
  {
    id: 'westgate-estates',
    name: 'Westgate Estates',
    county: 'Bibb',
    shortDescription: 'Legal help for the busy Pio Nono and Eisenhower Parkway corridors.',
    fullDescription: 'Westgate Estates sits near some of the most dangerous intersections in Macon. The volume of traffic on Pio Nono Avenue and Eisenhower Parkway creates a high risk for T-bone collisions and multi-car pileups. We help residents in this area navigate claims against uninsured drivers and aggressive insurance adjusters.',
    image: 'https://picsum.photos/800/600?random=12',
    distance: '4 miles',
    accidentHotspots: [
      { name: 'Pio Nono Avenue', description: 'Notorious for drivers running red lights and speeding.' },
      { name: 'Eisenhower Parkway', description: 'High-speed collisions occur frequently near the retail entrances.' },
      { name: 'Rocky Creek Road', description: 'Congestion often leads to rear-end accidents during rush hour.' }
    ],
    medicalFacilities: [
      { name: 'Piedmont Macon Medical Center', description: 'Many Westgate residents are treated here. We handle all communication with their billing department.' }
    ],
    courtInfo: { name: 'Bibb County State Court', description: 'For many traffic-related lawsuits, this is the venue. We have a strong track record of verdicts here.' },
    zipCodes: ['31206'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'The primary agency for Westgate. Accident reports are usually available online within 3-5 days.'
      }
    ],
    directionsFrom: 'Take Eisenhower Parkway East towards downtown. Turn left onto Broadway/MLK Jr Blvd, then right onto Cherry Street.',
    localFAQs: [
      {
        question: 'The other driver had no insurance. What do I do?',
        answer: 'Uninsured motorist rates are high in this area. We can help you file a claim under your own UM policy without your rates necessarily going up.'
      },
      {
        question: 'I was hurt in a parking lot accident at Westgate. Can I sue?',
        answer: 'Yes. Parking lot accidents can cause serious injuries. Property owners and negligent drivers are still liable for safety.'
      }
    ]
  },
  {
    id: 'payne-city',
    name: 'Payne City',
    county: 'Bibb',
    shortDescription: 'Representing the historic Payne community and Vineville area.',
    fullDescription: 'Though small, the area around Payne City and Vineville Avenue is a critical connector for Macon. Narrow historic streets meeting major thoroughfares like Vineville Ave creates unique hazards. We represent families in this tight-knit community who have been injured by commuters speeding through their neighborhood.',
    image: 'https://picsum.photos/800/600?random=13',
    distance: '2 miles',
    accidentHotspots: [
      { name: 'Vineville Avenue', description: 'Reversible lanes often confuse drivers, leading to head-on collisions.' },
      { name: 'Brookdale Avenue', description: 'Residential speeding is a major issue here.' },
      { name: 'Rogers Avenue', description: 'Blind spots at intersections contribute to side-impact crashes.' }
    ],
    medicalFacilities: [
      { name: 'Atrium Health Navicent', description: 'Located just minutes away. We work quickly to ensure no gaps in your treatment history.' }
    ],
    courtInfo: { name: 'Bibb County Superior Court', description: 'We ensure that the historic nature of the neighborhood is understood if premises liability is involved.' },
    zipCodes: ['31204'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'Handles all incidents in the Payne area since the city charter was dissolved.'
      }
    ],
    directionsFrom: 'Take Vineville Avenue South towards downtown. It turns into Forsyth Street. Turn left onto Cherry Street.',
    localFAQs: [
      {
        question: 'The reversible lanes on Vineville caused my crash. Who is at fault?',
        answer: 'These lanes are confusing. If the other driver was in the wrong lane for the time of day, they are negligent per se. We prove this with traffic schedules.'
      },
      {
        question: 'Can I claim for damage to my historic property?',
        answer: 'Yes. If a car ran off the road and damaged your home or fence, we handle the property damage claim alongside your injury claim.'
      }
    ]
  },
  {
    id: 'wood-valley',
    name: 'Wood Valley',
    county: 'Bibb',
    shortDescription: 'Serving North Macon residents near Upper River Road.',
    fullDescription: 'Wood Valley is a quiet residential area, but the arteries feeding it—Upper River Road and Arkwright Road—are dangerous. We see many accidents involving residents pulling out of subdivisions onto high-speed roads. We are dedicated to ensuring North Macon families receive full compensation.',
    image: 'https://picsum.photos/800/600?random=14',
    distance: '6 miles',
    accidentHotspots: [
      { name: 'Upper River Road', description: 'Winding roads and speeding drivers cause run-off-the-road accidents.' },
      { name: 'Arkwright Road', description: 'Heavy commercial traffic from nearby industrial parks poses risks.' }
    ],
    medicalFacilities: [
      { name: 'Piedmont Macon North', description: 'The closest ER for Wood Valley residents. We regularly obtain records from this facility.' }
    ],
    courtInfo: { name: 'Bibb County Superior Court', description: 'We are experienced in presenting cases to juries involving North Macon neighborhoods.' },
    zipCodes: ['31211'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'Patrols the North Macon district. Call us if you have trouble getting them to amend an incorrect report.'
      }
    ],
    directionsFrom: 'Take Upper River Road south to Gray Highway/US-129. Cross the river into downtown and turn right onto Cherry Street.',
    localFAQs: [
      {
        question: 'I was hit by a delivery driver on Arkwright Road. Is Amazon/FedEx liable?',
        answer: 'Potentially. Delivery accidents are complex. We investigate whether the driver was an employee or contractor to determine insurance coverage.'
      },
      {
        question: 'Deer caused the accident on Upper River Rd. Is there coverage?',
        answer: 'If you hit a deer, it is a comprehensive claim. If you swerved to avoid a deer and hit a tree, it is a collision claim. We help navigate the insurance language.'
      }
    ]
  },
  {
    id: 'azalea-park',
    name: 'Azalea Park',
    county: 'Bibb',
    shortDescription: 'Helping injury victims in West Macon near Mercer University Drive.',
    fullDescription: 'Azalea Park and the surrounding West Macon neighborhoods see high traffic volume from Mercer University Drive and Bloomfield Road. We represent clients injured at busy intersections and pedestrians struck in residential zones. We know this community and fight to make it safer.',
    image: 'https://picsum.photos/800/600?random=15',
    distance: '5 miles',
    accidentHotspots: [
      { name: 'Mercer University Drive', description: 'One of the busiest roads in Macon, frequent rear-end collisions.' },
      { name: 'Bloomfield Road', description: 'Poor lighting in some sections contributes to evening accidents.' },
      { name: 'Log Cabin Drive', description: 'Intersection accidents are common here.' }
    ],
    medicalFacilities: [
      { name: 'Atrium Health Navicent', description: 'The Level 1 Trauma Center most victims in this area are transported to.' }
    ],
    courtInfo: { name: 'Bibb County State Court', description: 'We file suit here to hold negligent drivers accountable for the harm they cause to West Macon families.' },
    zipCodes: ['31204', '31206'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'Responds to accidents in Azalea Park. We can help track down witnesses listed on their reports.'
      }
    ],
    directionsFrom: 'Take Mercer University Drive East towards downtown. Merge onto I-75 North briefly or take the surface streets to Third Street.',
    localFAQs: [
      {
        question: 'Student drivers from the university are often speeding here. Can I sue?',
        answer: 'Yes. Young drivers are often underinsured, but we look for parental insurance policies ("Family Purpose Doctrine") to ensure you are covered.'
      },
      {
        question: 'What if I was hit while walking in the neighborhood?',
        answer: 'Pedestrians have the right of way. Even if you were not in a crosswalk, the driver has a duty of care to avoid you.'
      }
    ]
  },
  {
    id: 'anthony-terrace',
    name: 'Anthony Terrace',
    county: 'Bibb',
    shortDescription: 'Advocating for the South Macon community near Houston Avenue.',
    fullDescription: 'Anthony Terrace is a longstanding community in South Macon. Unfortunately, traffic on Houston Avenue and Pio Nono creates danger for residents. We specialize in helping clients here who have been ignored by insurance companies. We ensure your voice is heard.',
    image: 'https://picsum.photos/800/600?random=16',
    distance: '3 miles',
    accidentHotspots: [
      { name: 'Houston Avenue', description: 'Fast-moving traffic often fails to yield to residents entering the roadway.' },
      { name: 'Pio Nono Avenue', description: 'Commercial trucks often use this route, posing risks to smaller cars.' }
    ],
    medicalFacilities: [
      { name: 'Atrium Health Navicent', description: 'We work closely with case managers here to ensure your bills are processed correctly.' }
    ],
    courtInfo: { name: 'Bibb County Superior Court', description: 'We are committed to ensuring fair trials for Anthony Terrace residents.' },
    zipCodes: ['31206'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'The responding agency for South Macon crashes.'
      }
    ],
    directionsFrom: 'Take Houston Avenue North straight into downtown Macon. It becomes Broadway. Turn right onto Cherry Street.',
    localFAQs: [
      {
        question: 'Insurance is offering me a quick check. Should I take it?',
        answer: 'No. They often target this area with low-ball offers. Once you sign, you cannot ask for more money later for medical bills.'
      },
      {
        question: 'Does it cost money to hire you?',
        answer: 'Never. We only get paid if we win your case. There is zero upfront cost.'
      }
    ]
  },
  {
    id: 'duresville',
    name: 'Duresville',
    county: 'Bibb',
    shortDescription: 'Local representation for the Pierce Avenue and Riverside area.',
    fullDescription: 'The Duresville area, nestled near the river and Riverside Drive, faces unique traffic challenges. From commuters rushing to downtown to trucks accessing the interstate, accidents are frequent. We protect the rights of residents in this historic section of Macon.',
    image: 'https://picsum.photos/800/600?random=17',
    distance: '2.5 miles',
    accidentHotspots: [
      { name: 'Riverside Drive', description: 'High speeds and multiple lanes lead to severe collisions.' },
      { name: 'Pierce Avenue', description: 'Intersection accidents often occur near the railroad crossing.' },
      { name: 'North Avenue', description: 'Congestion during events causes frequent fender-benders.' }
    ],
    medicalFacilities: [
      { name: 'Piedmont Macon Medical Center', description: 'Easily accessible from Duresville, we coordinate with their records department daily.' }
    ],
    courtInfo: { name: 'Bibb County State Court', description: 'The venue for most civil litigation arising from accidents in this district.' },
    zipCodes: ['31204'],
    localPolice: [
      { 
        name: 'Bibb County Sheriff\'s Office', 
        phone: '(478) 751-7500', 
        address: '111 Third St, Macon, GA 31201',
        description: 'Your local law enforcement for accident documentation.'
      }
    ],
    directionsFrom: 'Take Riverside Drive South into downtown Macon. Turn right onto MLK Jr Blvd and left onto Cherry Street.',
    localFAQs: [
      {
        question: 'I was hit near the railroad tracks on Pierce Ave. Who is responsible?',
        answer: 'If the crossing signal malfunctioned, the railroad might be liable. Otherwise, it is usually the other driver for failing to maintain a safe distance.'
      },
      {
        question: 'Can I get a rental car while mine is fixed?',
        answer: 'Yes, if the other driver is at fault, their insurance must pay for your rental. We help set this up for you.'
      }
    ]
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'car-accidents',
    title: 'Car Accidents',
    description: 'Aggressive representation for victims of negligent drivers on I-75, I-16, and Eisenhower Parkway.',
    icon: 'Car',
    fullDescription: 'In Macon, car accidents are complex due to the high volume of interstate travelers mixing with local traffic. We understand the specific nuances of Georgia’s "modified comparative negligence" laws and how to prove fault even when the other driver disputes it. We investigate cell phone records to prove distracted driving and analyze black box data.',
    exampleCase: 'Recovered $400,000 for a Mercer University student who was T-boned by a red-light runner at the intersection of Mercer University Drive and Pio Nono Avenue. We proved the other driver was texting at the time of the crash.',
    content: {
      intro: "A serious car accident changes your life in an instant. One moment you are driving down Riverside Drive or waiting at a light on Forsyth Street, and the next you are facing ambulance rides, tow trucks, and aggressive insurance adjusters. At Macon Personal Injury Attorneys, we specialize in cutting through the chaos. We handle the legal burden so you can focus on healing. The fallout from a vehicle collision often extends far beyond damaged metal. Victims frequently face mounting medical bills, lost wages from missed work, and the physical agony of rehabilitation. Our firm doesn't just process paperwork; we build a fortress of evidence around your claim to ensure you are not shortchanged by an insurance algorithm.",
      whyChooseUs: "We don't just process claims; we build cases for trial. Insurance companies know that our firm prepares every car accident case as if it will go before a Bibb County jury. This reputation often leads to higher settlement offers because insurers want to avoid facing us in court. Furthermore, we employ private investigators to visit crash scenes immediately, often securing surveillance footage from nearby Macon businesses before it is deleted.",
      localRelevance: "Driving in Macon presents unique hazards. The interchange of I-16 and I-75 is one of the most dangerous in the state, often confusing out-of-town drivers. Additionally, roads like Pio Nono Avenue and Eisenhower Parkway have high incidences of intersection collisions. We know these roads. We know the traffic patterns. We use this local knowledge to deconstruct the accident and prove the other driver was at fault.",
      keyIssues: [
        { title: "Distracted Driving", text: "Texting while driving is a plague on Macon roads. We subpoena cell phone records to prove the at-fault driver was not watching the road." },
        { title: "Uninsured Motorists (UM)", text: "Many drivers in Macon lack adequate insurance. We are experts at finding 'stackable' coverage policies to ensure you are compensated even if the other driver is broke." },
        { title: "Intersection Collisions", text: "The intersections at Eisenhower Pkwy and Pio Nono Ave are notorious for T-bone crashes. We analyze traffic camera footage to determine who really had the red light." }
      ],
      commonInjuries: [
        { title: "Whiplash & Soft Tissue", description: "Often minimized by insurers, these injuries can cause chronic pain. We ensure you get the MRI scans needed to prove the damage." },
        { title: "Traumatic Brain Injuries (TBI)", description: "From concussions to severe brain damage, we work with neurologists at Atrium Health Navicent to document cognitive decline." },
        { title: "Fractures & Orthopedic Injury", description: "Broken legs, arms, and ribs often require surgery and physical therapy, resulting in substantial future medical costs." }
      ],
      compensationTypes: [
        { title: "Medical Expenses", description: "Past and future medical bills, including ambulance fees, ER visits, surgery, and physical therapy." },
        { title: "Lost Wages", description: "Reimbursement for the time you missed at work, as well as loss of future earning capacity if you cannot return to your job." },
        { title: "Pain and Suffering", description: "Non-economic damages for the physical pain and emotional distress caused by the accident." },
        { title: "Diminished Value", description: "Compensation for the loss of resale value of your vehicle, even after it has been repaired." }
      ],
      statuteInfo: {
        title: "Georgia's Statute of Limitations",
        code: "O.C.G.A. § 9-3-33",
        description: "In Georgia, you generally have two years from the date of the accident to file a lawsuit. If you miss this deadline, your claim is forever barred. However, if a government vehicle (like a city bus) was involved, the deadline can be as short as 6 months."
      },
      faqs: [
        { question: "Can I recover damages if I was partially at fault?", answer: "Yes, under Georgia's modified comparative negligence rule, you can recover damages as long as you were less than 50% at fault. However, your award will be reduced by your percentage of fault." },
        { question: "Should I give a recorded statement to the insurance company?", answer: "No. Never give a recorded statement without your attorney present. Insurance adjusters are trained to twist your words to lower the value of your claim." },
        { question: "How long does a car accident claim take to settle?", answer: "It depends on the severity of your injuries. We advise clients never to settle until they reach Maximum Medical Improvement (MMI). Simple cases may take a few months, while complex cases involving future medical needs can take over a year to ensure you get full value." }
      ]
    }
  },
  {
    id: 'truck-accidents',
    title: 'Truck Accidents',
    description: 'Complex litigation against commercial trucking companies, log trucks, and delivery fleets.',
    icon: 'Truck',
    fullDescription: 'Middle Georgia is a hub for logging and commercial transport. Truck accidents involve federal regulations (FMCSA) that standard car accident lawyers often miss. We meticulously examine driver logs, maintenance records for brake failures, and weight limits for logging trucks traveling on Highway 129 and I-16.',
    exampleCase: 'Secured a multi-million dollar settlement for a family in Jones County struck by a logging truck that had worn tires and was overweight. We successfully held both the driver and the trucking company liable.',
    content: {
      intro: "Collisions with 80,000-pound tractor-trailers are not just 'big car accidents'. They are catastrophic events often caused by systemic negligence. Trucking companies often push drivers to break hours-of-service rules to meet deadlines. Our firm moves immediately to preserve the Electronic Control Module (ECM) or 'black box' data before the trucking company can wipe it. These cases require a deep understanding of corporate structure, as trucking companies often hide assets in shell companies to avoid paying judgments.",
      whyChooseUs: "We know the Federal Motor Carrier Safety Administration (FMCSA) regulations inside and out. We identify violations that other lawyers miss—such as falsified logbooks, improper cargo loading, and negligent hiring practices. We also have the resources to hire accident reconstruction experts who can build a 3D model of the crash scene to show the jury exactly what happened.",
      localRelevance: "With I-75 and I-16 intersecting in Macon, we see a massive volume of commercial traffic. Logging trucks coming from Jones and Twiggs counties are particularly dangerous on two-lane roads like Hwy 129. We have specific experience litigating against local logging companies and interstate carriers that pass through Bibb County.",
      keyIssues: [
        { title: "Driver Fatigue", text: "Federal law limits how many hours a trucker can drive. We audit digital logs to find discrepancies proving the driver was too tired to be on the road." },
        { title: "Negligent Maintenance", text: "From bald tires to faulty brakes, we review maintenance records to hold the trucking company accountable for putting a dangerous vehicle on I-75." },
        { title: "Vicarious Liability", text: "We don't just sue the driver; we sue the company, the logistics broker, and sometimes the cargo loader to maximize available insurance coverage." }
      ],
      commonInjuries: [
        { title: "Spinal Cord Injuries", description: "The force of a truck impact often causes paraplegia or quadriplegia, requiring lifetime care planning." },
        { title: "Crush Injuries", description: "When passenger vehicles are pinned or underride a trailer, occupants can suffer severe internal organ damage." },
        { title: "Burn Injuries", description: "Ruptured fuel tanks in truck crashes can lead to life-altering burns requiring skin grafts." }
      ],
      compensationTypes: [
        { title: "Life Care Plans", description: "We hire economists to calculate the cost of medical care for the rest of your life." },
        { title: "Punitive Damages", description: "If the trucking company destroyed evidence or knowingly hired a dangerous driver, we seek punitive damages to punish them." },
        { title: "Loss of Consortium", description: "Compensation for the impact the injury has on your relationship with your spouse." }
      ],
      statuteInfo: {
        title: "Direct Action Statutes",
        code: "O.C.G.A. § 40-1-112",
        description: "Unique to trucking cases in Georgia, this statute allows us to sue the trucking company's insurance carrier directly. This puts the insurance company's name on the lawsuit, which is a powerful tool in front of a jury."
      },
      faqs: [
        { question: "How is a truck accident different from a car accident?", answer: "Commercial trucks carry much higher insurance policies (often $1M+) but are defended by aggressive corporate legal teams. The evidence (black box data) is also much more complex and time-sensitive." },
        { question: "Who is liable in a truck accident?", answer: "It could be the driver, the trucking company, the owner of the trailer, the mechanic who fixed the brakes, or the company that loaded the cargo. We investigate everyone." },
        { question: "What if the truck driver was an independent contractor?", answer: "Trucking companies often use the 'independent contractor' defense to avoid liability. However, under federal regulations, they are often still responsible for the vehicle displaying their DOT number. We know how to pierce this corporate veil." }
      ]
    }
  },
  {
    id: 'slip-and-fall',
    title: 'Slip & Fall',
    description: 'Premises liability cases for dangerous conditions in businesses and apartment complexes.',
    icon: 'Footprints',
    fullDescription: 'Property owners in Bibb County have a legal duty to keep their premises safe. Whether it is a spill at a grocery store on Presidential Parkway or inadequate security at an apartment complex leading to an assault, we hold negligent landlords accountable under Georgia premises liability statutes.',
    exampleCase: 'Obtained a $850,000 verdict for an elderly client who fractured a hip due to an unmarked wet floor at a popular retail chain in Warner Robins, proving the store manager knew about the spill for over 30 minutes.',
    content: {
      intro: "Slip and fall cases are among the most difficult to win in Georgia because the law favors property owners. You must prove not only that a hazard existed, but that the owner knew (or should have known) about it and failed to fix it. We are experts at gathering the surveillance footage and maintenance logs necessary to prove 'constructive knowledge'. Don't let a business owner convince you that your fall was your clumsiness. If there was a hazard they ignored, they are responsible.",
      whyChooseUs: "We move fast to secure video evidence. Store cameras often overwrite footage within 48-72 hours. Our team sends preservation letters immediately to stop businesses from destroying key evidence. We also look for patterns—if a store has a history of falls, we find the past reports to prove they were on notice of the danger.",
      localRelevance: "We handle cases across Macon, from the Shoppes at River Crossing to grocery stores on Pio Nono. We also specialize in 'Negligent Security' cases at apartment complexes in Bibb County where landlords have failed to fix gates or lights, leading to assaults on tenants.",
      keyIssues: [
        { title: "Wet Floors & Spills", text: "Grocery stores must conduct reasonable inspections. If a spill was on the floor for 30 minutes without being cleaned, the store is liable." },
        { title: "Negligent Security", text: "If you were assaulted at an apartment complex or hotel with a history of crime, the owner may be liable for failing to provide gates, lights, or security guards." },
        { title: "Uneven Pavement", text: "Trip hazards on sidewalks or parking lots are common. We hire engineers to measure code violations." }
      ],
      commonInjuries: [
        { title: "Hip Fractures", description: "Common in elderly victims, often requiring partial or total hip replacement surgery." },
        { title: "Herniated Discs", description: "The impact of landing on a hard floor can rupture spinal discs, leading to nerve pain." },
        { title: "Head Injuries", description: "Striking your head on the floor or a shelf can cause concussions or subdural hematomas." }
      ],
      compensationTypes: [
        { title: "Medical Bills", description: "Coverage for surgery, rehab, and ongoing pain management." },
        { title: "Lost Income", description: "If your recovery keeps you out of work, the property owner is liable for those wages." },
        { title: "Pain and Suffering", description: "For the physical agony and loss of enjoyment of life." }
      ],
      statuteInfo: {
        title: "Duty of Owner / Occupier",
        code: "O.C.G.A. § 51-3-1",
        description: "This statute dictates that an owner or occupier of land who invites others onto the property must exercise ordinary care in keeping the premises and approaches safe."
      },
      faqs: [
        { question: "What if there was a 'Wet Floor' sign?", answer: "A sign helps the defense, but it doesn't automatically kill your case. If the sign was hidden, knocked over, or in the wrong place, you may still have a claim." },
        { question: "I fell at a friend's house. Do I have to sue my friend?", answer: "Technically yes, but in reality, you are suing their homeowner's insurance policy. Your friend usually pays nothing out of pocket." },
        { question: "How much is a slip and fall case worth in Georgia?", answer: "Settlements vary widely based on injuries and liability. A broken hip requiring surgery will command a much higher settlement than soft tissue injuries. We calculate lost wages, medical bills, and pain and suffering to determine value." }
      ]
    }
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    description: 'Justice for surgical errors, misdiagnoses, and birth injuries in Central Georgia hospitals.',
    icon: 'Stethoscope',
    fullDescription: 'Medical negligence cases in Georgia require an affidavit from an expert doctor just to file suit. We have the resources to hire top medical experts to review records from facilities like Atrium Health Navicent and Piedmont Macon to identify deviations from the standard of care.',
    exampleCase: 'Settled a confidential amount for a client who suffered complications after a routine surgery at a local hospital where the surgeon nicked a vital artery and failed to notice the error post-operatively.',
    content: {
      intro: "We trust doctors with our lives, but preventable medical errors are a leading cause of death. Malpractice isn't just a bad result; it's a deviation from the 'standard of care'. These cases are expensive and complex, requiring expert testimony from other specialists. We have the financial resources to fight these battles. In Georgia, the law protects doctors, making these cases challenging. You need a firm with the grit and the funding to take on hospital legal teams.",
      whyChooseUs: "We are selective with our malpractice cases, which allows us to dedicate the immense resources required to win. We work with board-certified physicians from across the country to review your records. We don't rely on 'hired guns'; we find true experts who can explain to a jury exactly how the local doctor failed you.",
      localRelevance: "We handle cases involving all major regional providers, including Atrium Health Navicent, Piedmont Macon, and Houston Healthcare. We are familiar with the specific protocols and staffing issues at these facilities, which can often be the root cause of negligence.",
      keyIssues: [
        { title: "Surgical Errors", text: "Wrong-site surgery, leaving instruments inside the body, or damaging surrounding organs during procedures." },
        { title: "Misdiagnosis", text: "Failure to diagnose cancer, heart attacks, or strokes when the symptoms were clear, leading to a worsening of the condition." },
        { title: "Birth Injuries", text: "Negligence during labor leading to cerebral palsy, Erb's palsy, or brain injury due to oxygen deprivation." }
      ],
      commonInjuries: [
        { title: "Sepsis & Infection", description: "Failure to treat post-operative infections can lead to organ failure and death." },
        { title: "Permanent Disability", description: "Nerve damage during surgery can lead to loss of function in limbs." },
        { title: "Worsened Prognosis", description: "A delay in cancer diagnosis can move a patient from Stage I to Stage IV, significantly reducing survival chances." }
      ],
      compensationTypes: [
        { title: "Future Medical Costs", description: "For injuries requiring lifetime care, like cerebral palsy." },
        { title: "Lost Earning Capacity", description: "If the malpractice prevents you from returning to your career." },
        { title: "Noneconomic Damages", description: "Compensation for the loss of enjoyment of life and physical pain." }
      ],
      statuteInfo: {
        title: "Expert Affidavit Requirement",
        code: "O.C.G.A. § 9-11-9.1",
        description: "In any action for professional malpractice in Georgia, the plaintiff must file an affidavit of an expert competent to testify, which sets forth specifically at least one negligent act or omission."
      },
      faqs: [
        { question: "How long do I have to file a malpractice claim?", answer: "Generally 2 years from the injury, but Georgia also has a 'Statute of Repose' of 5 years, meaning no claim can be brought more than 5 years after the act, regardless of when it was discovered." },
        { question: "Does a bad surgical outcome mean malpractice?", answer: "Not necessarily. Medicine is not an exact science. To win, we must prove the doctor did something a competent doctor would not have done under similar circumstances." },
        { question: "Is there a cap on medical malpractice damages in Georgia?", answer: "No. The Georgia Supreme Court ruled that caps on non-economic damages (pain and suffering) are unconstitutional. There is no legal limit to what a jury can award for your suffering." }
      ]
    }
  },
  {
    id: 'wrongful-death',
    title: 'Wrongful Death',
    description: 'Compassionate support for families who have lost a loved one due to negligence.',
    icon: 'HeartCrack',
    fullDescription: 'Georgia law divides wrongful death claims into two parts: the "full value of the life" of the deceased (paid to the family) and the "estate claim" (medical bills, funeral costs, pain and suffering). We guide families through this emotional legal process, ensuring the legacy of their loved one is honored with justice.',
    exampleCase: 'Represented the widow of a motorcyclist killed on I-475 by a fatigued commercial driver. We secured the future financial stability of his children through a structured settlement.',
    content: {
      intro: "There is no tragedy greater than the unexpected loss of a spouse, parent, or child. While no amount of money can bring them back, Georgia law provides a mechanism to hold the negligent party accountable and secure the financial future of the survivors. We handle these cases with the utmost sensitivity and aggression. We understand that this is not just a legal case; it is your family's story. We take the burden of the investigation off your shoulders so you can grieve.",
      whyChooseUs: "We understand the nuances of calculating the 'Full Value of the Life'. This includes not just lost wages, but the intangible value of relationships, hobbies, and time spent with family. We use video documentaries and testimony from friends and family to show the insurance company—and the jury—just how much this person meant to the world.",
      localRelevance: "We have handled wrongful death cases arising from accidents on I-75, industrial accidents at local plants, and tragic shootings in Macon. We know how to navigate the Bibb County Probate Court to set up the necessary estate administration to pursue these claims.",
      keyIssues: [
        { title: "The Estate Claim", text: "Recovering costs for medical bills incurred before death, funeral expenses, and pain and suffering of the deceased." },
        { title: "Full Value of Life", text: "The primary claim in Georgia. It measures the value of the life from the perspective of the deceased, including economic and non-economic value." },
        { title: "Probate Issues", text: "We assist with setting up the estate administration necessary to pursue the claim." }
      ],
      commonInjuries: [
        { title: "Fatal Car Accidents", description: "The leading cause of wrongful death claims in Middle Georgia." },
        { title: "Medical Negligence", description: "Deaths caused by surgical errors or misdiagnosis." },
        { title: "Workplace Accidents", description: "Fatal falls or equipment malfunctions on construction sites." }
      ],
      compensationTypes: [
        { title: "Lost Wages & Benefits", description: "What the deceased would have earned over their remaining working life." },
        { title: "Loss of Care & Companionship", description: "The intangible value of a parent's advice or a spouse's love." },
        { title: "Funeral Expenses", description: "Reimbursement for burial and funeral costs." }
      ],
      statuteInfo: {
        title: "Measure of Damages",
        code: "O.C.G.A. § 51-4-2",
        description: "The surviving spouse or children may recover for the homicide of the spouse or parent the full value of the life of the decedent, as shown by the evidence."
      },
      faqs: [
        { question: "Who can file a wrongful death lawsuit in Georgia?", answer: "Typically the surviving spouse. If there is no spouse, then the children. If no children, then the parents or the estate administrator." },
        { question: "Is wrongful death settlement taxable?", answer: "Generally, compensatory damages for wrongful death are not taxable under federal or state law, but punitive damages might be." },
        { question: "How are wrongful death proceeds divided among family members?", answer: "Under Georgia law, the surviving spouse receives at least one-third of the recovery, regardless of the number of children. The remaining amount is divided equally among the children. If there are no children, the spouse receives the full amount." }
      ]
    }
  },
  {
    id: 'motorcycle-accidents',
    title: 'Motorcycle Accidents',
    description: 'Protecting riders injured by distracted drivers who fail to see motorcycles.',
    icon: 'Bike',
    fullDescription: 'Motorcyclists face bias from insurance adjusters who often unfairly blame riders for accidents. We fight this bias aggressively. We understand the physics of motorcycle crashes and work with accident reconstructionists to prove that the car driver failed to yield the right of way.',
    exampleCase: 'Won a policy-limits settlement for a rider forced off the road on Vineville Avenue by a merging vehicle. Even though there was no contact between vehicles, we proved the car driver caused the crash.',
    content: {
      intro: "Riding is a way of life in Middle Georgia, but it comes with risks—mostly from other drivers. 'I didn't see him' is the most common excuse we hear. We know that motorcyclists are often the safest drivers on the road because they have to be. We fight the 'reckless biker' stereotype that insurance companies try to use to devalue your claim. Injuries in motorcycle crashes are often catastrophic because riders have very little protection. We ensure that the full extent of these injuries is recognized.",
      whyChooseUs: "We are advocates for rider safety. We understand the dynamics of counter-steering, laying a bike down, and high-siding. This technical knowledge helps us cross-examine at-fault drivers and experts. We also know how to value custom bikes and gear, which standard adjusters often overlook.",
      localRelevance: "Macon has a vibrant riding community. Whether you were riding on the backroads of Jones County or commuting on I-475, we know the terrain. We understand the dangers of 'phantom vehicles' that run riders off the road and flee the scene, and we know how to find UM/UIM coverage to pay for it.",
      keyIssues: [
        { title: "Road Rash & Scarring", text: "These are permanent disfigurements that deserve significant compensation. We work with plastic surgeons to estimate future revision costs." },
        { title: "Traumatic Brain Injury", text: "Even with a helmet, riders are susceptible to concussions and TBI. We ensure these 'invisible injuries' are fully diagnosed." },
        { title: "Lane Splitting", text: "While illegal in Georgia, we often defend riders accused of this by proving they were simply maneuvering to avoid a hazard." }
      ],
      commonInjuries: [
        { title: "Degloving Injuries", description: "Severe skin loss requiring extensive grafting." },
        { title: "Amputations", description: "Loss of limbs due to the severity of impact with vehicles or guardrails." },
        { title: "Biker's Arm", description: "Nerve damage in the arm caused by landing on it during a fall." }
      ],
      compensationTypes: [
        { title: "Medical Equipment", description: "Costs for prosthetics, wheelchairs, or home modifications." },
        { title: "Pain and Suffering", description: "Motorcycle accidents often involve excruciating recovery periods." },
        { title: "Property Damage", description: "Full replacement value for your bike and custom gear (helmet, leathers)." }
      ],
      statuteInfo: {
        title: "Helmet Laws",
        code: "O.C.G.A. § 40-6-315",
        description: "Georgia requires all riders to wear DOT-approved helmets. Failure to wear one can affect your damages, but it does not bar you from suing if the other driver caused the crash."
      },
      faqs: [
        { question: "Can I claim for my custom bike modifications?", answer: "Yes. Standard Blue Book value often doesn't cover custom chrome, pipes, or paint. We ensure your property damage claim includes these upgrades." },
        { question: "What if I wasn't wearing a helmet?", answer: "You can still sue, but the defense will argue that your injuries (specifically head injuries) were your own fault. It makes the case harder, but not impossible." },
        { question: "Do I need special insurance for my motorcycle in Georgia?", answer: "Yes, standard auto insurance does not cover motorcycles. You must have a specific motorcycle policy. We also highly recommend adding Uninsured Motorist (UM) coverage, as many drivers who hit motorcyclists have minimum limits." }
      ]
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "After my accident on I-75, I didn't know where to turn. Macon Personal Injury Attorneys handled everything with the insurance company and got me a settlement that paid for all my surgeries.",
    author: "Sarah J.",
    location: "Macon, GA",
    rating: 5
  },
  {
    id: 2,
    text: "They actually came to visit me at Houston Medical Center when I couldn't drive. That level of care is rare these days. Highly recommended.",
    author: "Michael R.",
    location: "Warner Robins, GA",
    rating: 5
  },
  {
    id: 3,
    text: "Professional, aggressive, and local. They knew exactly how the Bibb County courts worked and used that to my advantage.",
    author: "David L.",
    location: "Gray, GA",
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How much does a personal injury lawyer cost in Macon?",
    answer: "At Macon Personal Injury Attorneys, we work on a contingency fee basis. This means you pay $0 upfront. We only get paid a percentage of the settlement or verdict we win for you. If we don't win, you don't pay us legal fees."
  },
  {
    question: "What should I do immediately after a car accident in Georgia?",
    answer: "First, call 911 to report the accident and get medical attention if needed. Take photos of the scene and exchange insurance info. Do NOT sign anything from the other driver's insurance company before speaking to an attorney."
  },
  {
    question: "How long do I have to file a lawsuit in Georgia?",
    answer: "Generally, the Statute of Limitations for personal injury cases in Georgia is two years from the date of the accident. However, there are exceptions, so it is critical to consult an attorney immediately."
  },
  {
    question: "Do I have to go to court for my injury claim?",
    answer: "Most personal injury cases are settled out of court through negotiations with the insurance company. However, if they refuse to offer a fair settlement, our trial attorneys are fully prepared to present your case to a jury in Bibb County or surrounding courts."
  },
  {
    question: "How much is my car accident case worth?",
    answer: "Every case is unique. The value depends on the severity of your injuries, medical bills, lost wages, and pain and suffering. We offer free case evaluations to estimate the potential value of your claim."
  }
];

export const CASE_RESULTS: CaseResult[] = [
  {
    amount: "$2.5 Million",
    type: "Trucking Accident",
    location: "I-75 Macon",
    description: "Settlement for a family injured by a fatigued commercial truck driver."
  },
  {
    amount: "$850,000",
    type: "Premises Liability",
    location: "Warner Robins",
    description: "Verdict for a client who suffered a back injury due to a dangerous walkway at a retail store."
  },
  {
    amount: "$400,000",
    type: "Car Accident",
    location: "Bibb County",
    description: "Policy limit settlement for a victim of a T-bone collision at a major intersection."
  },
  {
    amount: "$1.2 Million",
    type: "Wrongful Death",
    location: "Jones County",
    description: "Recovered for the family of a motorcycle rider struck by a delivery vehicle."
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: "james-beauregard",
    name: "James L. Beauregard",
    role: "Founding Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
    bio: "With over 30 years of courtroom experience in Bibb County, James has recovered millions for injury victims. He founded Macon Personal Injury Attorneys with the belief that local clients deserve world-class representation without having to hire an Atlanta firm.",
    email: "james@maconpersonalinjury.com",
    phone: "(478) 555-0123",
    practiceFocus: ["Catastrophic Injury", "Wrongful Death", "Trucking Litigation"],
    education: "J.D., Mercer University School of Law"
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
    bio: "A relentless advocate for medical malpractice victims, Sarah brings a detailed eye to complex litigation. Her track record includes numerous seven-figure settlements against major hospital systems in Middle Georgia.",
    email: "sarah@maconpersonalinjury.com",
    phone: "(478) 555-0123",
    practiceFocus: ["Medical Malpractice", "Birth Injuries", "Nursing Home Abuse"],
    education: "J.D., University of Georgia School of Law"
  },
  {
    id: "michael-sterling",
    name: "Michael Sterling",
    role: "Senior Associate",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800&h=1000",
    bio: "Michael specializes in commercial vehicle accidents and premises liability. Known for his aggressive negotiation style, he ensures that insurance adjusters treat our clients with the respect they deserve.",
    email: "michael@maconpersonalinjury.com",
    phone: "(478) 555-0123",
    practiceFocus: ["Car Accidents", "Slip & Fall", "DUI Injury Victims"],
    education: "J.D., Mercer University School of Law"
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Associate Attorney",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000",
    bio: "Fluent in Spanish and English, Elena is dedicated to serving Macon's diverse community. She focuses on workers' compensation and personal injury claims, ensuring language barriers never prevent access to justice.",
    email: "elena@maconpersonalinjury.com",
    phone: "(478) 555-0123",
    practiceFocus: ["Workers' Compensation", "Auto Accidents", "Immigrant Rights"],
    education: "J.D., Emory University School of Law"
  }
];