import { ServiceArea, PracticeArea, Testimonial, FAQ, CaseResult, Attorney } from './types';

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'warner-robins',
    name: 'Warner Robins',
    county: 'Houston',
    shortDescription: 'Serving accident victims in the home of the Robins Air Force Base.',
    fullDescription: 'Warner Robins is one of the fastest-growing cities in Georgia, but with growth comes increased traffic and accidents. Our attorneys specialize in handling claims involving military personnel at Robins AFB, as well as civilian accidents on the busy Watson Boulevard corridor. We understand the unique administrative hurdles involved when dealing with federal employees or base traffic.',
    image: 'https://picsum.photos/800/600?random=1',
    distance: '18 miles',
    accidentHotspots: [
      { name: 'Watson Boulevard', description: 'The main artery of the city, frequent rear-end collisions occur during lunch hour and shift changes at the base.' },
      { name: 'Russell Parkway', description: 'High-speed intersection accidents are common here, particularly near the I-75 ramps.' },
      { name: 'Houston Lake Road', description: 'Congestion leads to distracted driving incidents during school commute times.' }
    ],
    medicalFacilities: [
      { name: 'Houston Medical Center', description: 'The primary facility for emergency care in Warner Robins. We regularly request medical records from their billing department for our clients.' }
    ],
    courtInfo: { name: 'Houston County Superior Court', description: 'Located in Perry, this is where major personal injury lawsuits for Warner Robins residents are filed. We are well-versed in the local judicial procedures here.' },
    zipCodes: ['31088', '31093', '31098'],
    localPolice: [
      { 
        name: 'Warner Robins Police Department', 
        phone: '(478) 302-5378', 
        address: '100 Watson Blvd, Warner Robins, GA 31093',
        description: 'Handles accidents within city limits. Reports are typically available 3-5 business days after the crash.'
      },
      {
        name: 'Houston County Sheriff',
        phone: '(478) 542-2125',
        address: '202 Carl Vinson Pkwy, Warner Robins, GA 31088',
        description: 'Jurisdiction over accidents occurring in unincorporated areas of the county.'
      }
    ],
    directionsFrom: 'From Warner Robins, take GA-247 North directly into Macon, or take I-75 North to I-16 East (Exit 165). Take the Coliseum Drive exit to cross the river into downtown Macon. Our office is located on Cherry Street.',
    localFAQs: [
      {
        question: 'I was hit by a government vehicle near Robins AFB. Is the process different?',
        answer: 'Yes. Claims against government entities involve the Federal Tort Claims Act (FTCA) or state equivalents. These have strict notice deadlines (often shorter than the standard 2 years). We specialize in these complex filings.'
      },
      {
        question: 'Do I have to file my lawsuit in Warner Robins?',
        answer: 'If the at-fault driver lives in Houston County, the lawsuit is typically filed in the Houston County Superior Court in Perry, even if the accident happened in Warner Robins.'
      }
    ]
  },
  {
    id: 'perry',
    name: 'Perry',
    county: 'Houston',
    shortDescription: 'Dedicated legal representation near the Georgia National Fairgrounds.',
    fullDescription: 'Perry is a hub for agricultural transport and tourists visiting the Georgia National Fairgrounds. Heavy truck traffic on I-75 passing through Perry leads to severe commercial vehicle accidents. We have deep experience litigating against interstate trucking companies that try to minimize payouts for accidents in this corridor.',
    image: 'https://picsum.photos/800/600?random=2',
    distance: '28 miles',
    accidentHotspots: [
      { name: 'I-75 near Exit 135', description: 'A notorious stretch for semi-truck accidents due to lane shifts and heavy fairgrounds traffic.' },
      { name: 'Sam Nunn Boulevard', description: 'Frequent collisions involving out-of-town drivers unfamiliar with local traffic patterns.' }
    ],
    medicalFacilities: [
      { name: 'Perry Hospital', description: 'Provides essential emergency services. For major trauma, patients are often transferred to Macon, and we track that care continuum.' }
    ],
    courtInfo: { name: 'Houston County Superior Court', description: 'We have successfully litigated numerous cases before the judges in Houston County, ensuring fair trials for Perry residents.' },
    zipCodes: ['31069'],
    localPolice: [
      { 
        name: 'Perry Police Department', 
        phone: '(478) 988-2800', 
        address: '1207 Washington St, Perry, GA 31069',
        description: 'Responsible for patrolling city streets and the Fairgrounds area during events.'
      }
    ],
    directionsFrom: 'Take I-75 North for approximately 25 minutes. Merge onto I-16 East at the split in Macon. Take the first exit for downtown Macon. We offer free parking validation for our Perry clients.',
    localFAQs: [
      {
        question: 'An out-of-state driver hit me on I-75 in Perry. Where do we sue?',
        answer: 'Under Georgia’s Long Arm Statute, we can sue the non-resident driver in the county where the accident occurred (Houston County). You do not have to travel to their home state.'
      },
      {
        question: 'Do you handle accidents at the Georgia National Fairgrounds?',
        answer: 'Yes. These can be complex premises liability or pedestrian cases. We investigate security footage and traffic control plans to determine liability.'
      }
    ]
  },
  {
    id: 'forsyth',
    name: 'Forsyth',
    county: 'Monroe',
    shortDescription: 'Protecting the rights of injured residents in Monroe County.',
    fullDescription: 'Forsyth sits at a critical junction of I-75. High-speed interstate crashes are unfortunately common, often involving fatigued truckers traveling between Atlanta and Florida. Our firm is aggressive in preserving "black box" data from these commercial vehicles before it is destroyed.',
    image: 'https://picsum.photos/800/600?random=3',
    distance: '25 miles',
    accidentHotspots: [
      { name: 'I-75 North/South Split', description: 'The curvature of the interstate here often catches speeding drivers off guard, leading to rollovers.' },
      { name: 'Tift College Drive', description: 'Local traffic meets highway travelers, creating a hotspot for T-bone accidents.' }
    ],
    medicalFacilities: [
      { name: 'Monroe County Hospital', description: 'A critical access hospital. We work closely with their administration to secure prompt billing records for settlement demands.' }
    ],
    courtInfo: { name: 'Monroe County Superior Court', description: 'Located in downtown Forsyth. Our firm has a reputation for holding firm against low-ball offers in this venue.' },
    zipCodes: ['31029'],
    localPolice: [
      { 
        name: 'Monroe County Sheriff\'s Office', 
        phone: '(478) 994-7043', 
        address: '145 L Cary Bittick Dr, Forsyth, GA 31029',
        description: 'The primary agency for I-75 accidents in the area. We can help you obtain body cam footage from deputies.'
      },
      {
        name: 'Forsyth Police Department',
        phone: '(478) 994-6022',
        address: '26 N Jackson St, Forsyth, GA 31029',
        description: 'Handles incidents within the city square and surrounding neighborhoods.'
      }
    ],
    directionsFrom: 'Head South on I-75 towards Macon. Take Exit 165 on the left for I-16 East/Jim Gillis Hwy. Exit onto Martin Luther King Jr Blvd to reach our downtown office.',
    localFAQs: [
      {
        question: 'Do I have to drive to Macon for a consultation?',
        answer: 'No. While our office is a short drive down I-75, we are happy to come to your home in Forsyth or meet virtually via Zoom to discuss your case.'
      },
      {
        question: 'The trucking company is calling me. Should I answer?',
        answer: 'No. Trucking companies deploy "Rapid Response Teams" to get recorded statements that hurt your case. Direct them to speak with your attorney immediately.'
      }
    ]
  },
  {
    id: 'gray',
    name: 'Gray',
    county: 'Jones',
    shortDescription: 'Comprehensive personal injury support for Jones County families.',
    fullDescription: 'Gray serves as a connector between Macon and the lake country. Two-lane highways like Hwy 129 present dangers for head-on collisions and logging truck accidents. We specialize in rural road accidents where limited witnesses and high speeds create devastating injuries.',
    image: 'https://picsum.photos/800/600?random=4',
    distance: '14 miles',
    accidentHotspots: [
      { name: 'Gray Highway (Hwy 129)', description: 'Poor lighting and high speeds at night contribute to serious injury accidents.' },
      { name: 'Clinton Nature Preserve Area', description: 'Winding roads often lead to single-vehicle run-off-road accidents.' }
    ],
    medicalFacilities: [
      { name: 'Atrium Health Navicent (Macon)', description: 'Most serious injuries in Gray are transported to Macon. We handle the complex lien resolution required with large hospital systems.' }
    ],
    courtInfo: { name: 'Jones County Superior Court', description: 'We understand the jury pool in Jones County and tailor our case presentation to resonate with local values.' },
    zipCodes: ['31032'],
    localPolice: [
      { 
        name: 'Gray Police Department', 
        phone: '(478) 986-5554', 
        address: '109 James St, Gray, GA 31032',
        description: 'Your first point of contact for accidents in downtown Gray.'
      },
      {
        name: 'Jones County Sheriff',
        phone: '(478) 986-3489',
        address: '123 Holmes Hawkins Dr, Gray, GA 31032',
        description: 'Handles accidents on the rural highways connecting Gray to Macon and Milledgeville.'
      }
    ],
    directionsFrom: 'Take US-129 South (Gray Highway) directly into Macon. Cross the Otis Redding Bridge and turn right onto Cherry Street. It is a straight 20-minute drive.',
    localFAQs: [
      {
        question: 'Accidents on Gray Highway often involve logging trucks. Who is liable?',
        answer: 'Liability can extend beyond the driver to the trucking company, the cargo loader (if logs were unsecured), or the maintenance provider. We investigate all parties.'
      },
      {
        question: 'What if the accident happened on a dirt road in Jones County?',
        answer: 'Road maintenance issues can sometimes cause accidents. If the county failed to maintain the road, there may be a claim against the municipality, though these are time-sensitive.'
      }
    ]
  },
  {
    id: 'byron',
    name: 'Byron',
    county: 'Peach',
    shortDescription: 'Expert legal counsel for I-75 accident victims in Peach County.',
    fullDescription: 'Byron is a major speed trap area where sudden braking on I-75 causes multi-car pileups. We represent many victims injured by distracted drivers in this corridor. Additionally, the increasing warehouse traffic in Peach County has led to a spike in delivery van accidents.',
    image: 'https://picsum.photos/800/600?random=5',
    distance: '16 miles',
    accidentHotspots: [
      { name: 'Highway 49', description: 'Commercial vehicle traffic mixing with commuters often results in side-swipe accidents.' },
      { name: 'White Road Intersection', description: 'Limited visibility has caused numerous failure-to-yield accidents.' }
    ],
    medicalFacilities: [
      { name: 'Atrium Health Navicent Peach', description: 'Located nearby, this facility treats many of our clients. We ensure all treatment records are preserved.' }
    ],
    courtInfo: { name: 'Peach County Superior Court', description: 'We file suit in Peach County when insurance companies refuse to pay fair value for accidents occurring in Byron.' },
    zipCodes: ['31008'],
    localPolice: [
      { 
        name: 'Byron Police Department', 
        phone: '(478) 956-2880', 
        address: '401 Main St, Byron, GA 31008',
        description: 'Known for strict traffic enforcement, they produce detailed accident reports which are vital for your case.'
      }
    ],
    directionsFrom: 'Take I-75 North towards Macon. It is a quick 15-minute drive. Merge onto I-16 East and take the first downtown exit.',
    localFAQs: [
      {
        question: 'I was injured in a multi-car pileup on I-75 in Byron. Who do I sue?',
        answer: 'Multi-car accidents are complex. We determine liability by analyzing police reports and witness statements to find the initial negligent driver who triggered the chain reaction.'
      },
      {
        question: 'Does the "speed trap" reputation of Byron affect my case?',
        answer: 'It can actually help. If the other driver was speeding significantly, police dashcams or radar data might be available to prove their negligence.'
      }
    ]
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: 'Car Accidents',
    description: 'Aggressive representation for victims of negligent drivers on I-75, I-16, and Eisenhower Parkway.',
    icon: 'Car',
    fullDescription: 'In Macon, car accidents are complex due to the high volume of interstate travelers mixing with local traffic. We understand the specific nuances of Georgia’s "modified comparative negligence" laws and how to prove fault even when the other driver disputes it. We investigate cell phone records to prove distracted driving and analyze black box data.',
    exampleCase: 'Recovered $400,000 for a Mercer University student who was T-boned by a red-light runner at the intersection of Mercer University Drive and Pio Nono Avenue. We proved the other driver was texting at the time of the crash.'
  },
  {
    title: 'Truck Accidents',
    description: 'Complex litigation against commercial trucking companies, log trucks, and delivery fleets.',
    icon: 'Truck',
    fullDescription: 'Middle Georgia is a hub for logging and commercial transport. Truck accidents involve federal regulations (FMCSA) that standard car accident lawyers often miss. We meticulously examine driver logs, maintenance records for brake failures, and weight limits for logging trucks traveling on Highway 129 and I-16.',
    exampleCase: 'Secured a multi-million dollar settlement for a family in Jones County struck by a logging truck that had worn tires and was overweight. We successfully held both the driver and the trucking company liable.'
  },
  {
    title: 'Slip & Fall',
    description: 'Premises liability cases for dangerous conditions in businesses and apartment complexes.',
    icon: 'Footprints',
    fullDescription: 'Property owners in Bibb County have a legal duty to keep their premises safe. Whether it is a spill at a grocery store on Presidential Parkway or inadequate security at an apartment complex leading to an assault, we hold negligent landlords accountable under Georgia premises liability statutes.',
    exampleCase: 'Obtained a $850,000 verdict for an elderly client who fractured a hip due to an unmarked wet floor at a popular retail chain in Warner Robins, proving the store manager knew about the spill for over 30 minutes.'
  },
  {
    title: 'Medical Malpractice',
    description: 'Justice for surgical errors, misdiagnoses, and birth injuries in Central Georgia hospitals.',
    icon: 'Stethoscope',
    fullDescription: 'Medical negligence cases in Georgia require an affidavit from an expert doctor just to file suit. We have the resources to hire top medical experts to review records from facilities like Atrium Health Navicent and Piedmont Macon to identify deviations from the standard of care.',
    exampleCase: 'Settled a confidential amount for a client who suffered complications after a routine surgery at a local hospital where the surgeon nicked a vital artery and failed to notice the error post-operatively.'
  },
  {
    title: 'Wrongful Death',
    description: 'Compassionate support for families who have lost a loved one due to negligence.',
    icon: 'HeartCrack',
    fullDescription: 'Georgia law divides wrongful death claims into two parts: the "full value of the life" of the deceased (paid to the family) and the "estate claim" (medical bills, funeral costs, pain and suffering). We guide families through this emotional legal process, ensuring the legacy of their loved one is honored with justice.',
    exampleCase: 'Represented the widow of a motorcyclist killed on I-475 by a fatigued commercial driver. We secured the future financial stability of his children through a structured settlement.'
  },
  {
    title: 'Motorcycle Accidents',
    description: 'Protecting riders injured by distracted drivers who fail to see motorcycles.',
    icon: 'Bike',
    fullDescription: 'Motorcyclists face bias from insurance adjusters who often unfairly blame riders for accidents. We fight this bias aggressively. We understand the physics of motorcycle crashes and work with accident reconstructionists to prove that the car driver failed to yield the right of way.',
    exampleCase: 'Won a policy-limits settlement for a rider forced off the road on Vineville Avenue by a merging vehicle. Even though there was no contact between vehicles, we proved the car driver caused the crash.'
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