import { Category, Product, Catalog, Testimonial, SiteSettings, GalleryImage } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  whatsapp: '916382488657',
  email: 'hitechupvc@gmail.com',
  facebook: 'https://www.facebook.com/share/1GeNASNguA/',
  instagram: 'https://www.instagram.com/hitechhardwares?igsh=YXVpNHpyeHp2cHdm',
  headOfficePhone: '+91 81224 76567',
  coimbatorePhone: '+91 63817 78251',
  maduraiPhone: '+91 86674 59835',
  adminPhone: '+91 63824 88657',
  heroBanners: [
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%201.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%202.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%203.png'
  ],
  aboutText: 'We, Hi-Tech UPVC Hardwares, are a leading ISO 9001:2015 certified uPVC Hardware provider, with a complete range of uPVC Hardware, Tools, & Accessories, that offers integrated innovative solutions in the area of uPVC Hardware products.',
  aboutImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20primary.png',
  aboutTextSecondary: "Over the past few years, we have shown tremendous growth towards of range of uPVC products and based on our prestigious client's request, we have started our own manufacturing towards the usage of uPVC and Aluminum Windows & Doors. We are also an authorized distributor for SIEGENIA hardware and WACKER Silicone products.",
  aboutImageSecondary: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20Second.png',
  strengthImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  contactImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Contact%20us.png',
  headerLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg', 
  footerLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg',
  poweredByLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/e6fff671b179d6750fc0bb7b49b4041165679de4/Assets/Group%20107081%201%20(3).svg',
  strengths: [
    { id: '1', iconName: 'Heart', text: 'Generosity in the market.' },
    { id: '2', iconName: 'ShieldCheck', text: 'Ethical business dealings.' },
    { id: '3', iconName: 'Users', text: 'A competent team for delivery.' },
    { id: '4', iconName: 'Globe', text: 'Wide range of network distribution.' },
    { id: '5', iconName: 'BadgePercent', text: 'Most competitive pricing.' },
  ]
};

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'C001', name: 'Drilling Screws MS & SS', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Frame%20Fixing%20Fasteners%20(1).png?raw=true' },
  { id: 'C002', name: 'SS Mesh', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/SS%20Mesh%20(1).png?raw=true' },
  { id: 'C003', name: 'Casement esparg 22mm Back set (PR)', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20esparg%2022mm%20Back%20set%20(1).png?raw=true' },
  { id: 'C004', name: 'Colour Door Handles', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Sliding%20Door%20Set%20-%20D%20Handle%20(1).png?raw=true' },
  { id: 'C005', name: 'CASEMENT HANDLE', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Handle%20Spindle%20(1).png?raw=true' },
  { id: 'C006', name: 'Plastic Items', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Anti%20lift%20Block.png?raw=true' },
  { id: 'C007', name: 'Sliding Handles', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20WH.png?raw=true' },
  { id: 'C008', name: 'Tools', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Gasket%20Mesh%20Tool.png?raw=true' },
  { id: 'C009', name: 'Gaskets', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Gasket%20Mesh%20Tool%20(1).png?raw=true' },
  { id: 'C0010', name: 'Cylinders', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cylinder%20(1).png?raw=true' },
  { id: 'C0011', name: 'Touch locks', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Touch%20locks%20(1).png?raw=true' },
  { id: 'C0012', name: 'Bathroom Door Lock set', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Bathroom%20Door%20Lock%20(2).png?raw=true' },
  { id: 'C0013', name: 'FrictionStays', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/image%20163.png?raw=true' },
  { id: 'C0014', name: 'Hinges', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Hinges%20(1).png?raw=true' },
  { id: 'C0015', name: 'Mortise Gears', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Mortise%20Door%20Set.png?raw=true' },
  { id: 'C0016', name: 'Machines', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Corner%20Cleaning%20Machine.png?raw=true' },
  { id: 'C0017', name: 'Axis', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%209mm%20Axis.png?raw=true' },
  { id: 'C0018', name: 'Sliding espags', image: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/L-Key%20Handle.png?raw=true' }
];

export const INITIAL_PRODUCTS: Product[] = [
  // C001 - Drilling Screws MS & SS
  { id: 'I001', categoryId: 'C001', name: 'Frame Fixing Fasteners', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Frame%20Fixing%20Fasteners%20(1).png?raw=true'], description: 'Frame Fixing Fasteners : 8x60\nFrame Fixing Fasteners : 8x80\nFrame Fixing Fasteners : 8x100\nFrame Fixing Fasteners : 10x100\nFrame Fixing Fasteners : 10x120\nFrame Fixing Fasteners : 10x140\nFrame Fixing Fasteners : 10x160' },
  { id: 'I002', categoryId: 'C001', name: 'CSK Self Drilling Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/CSK%20Self%20Drilling%20Screws%20(1).png?raw=true'], description: 'CSK Self Drilling Screws 3.9x13\nCSK Self Drilling Screws 3.9x16\nCSK Self Drilling Screws 3.9x19\nCSK Self Drilling Screws 3.9x25\nCSK Self Drilling Screws 3.9x32\nCSK Self Drilling Screws 3.9x38\nCSK Self Drilling Screws 4.2x50\nCSK Self Drilling Screws 4.2x60\nCSK Self Drilling Screws 4.2x75' },
  { id: 'I003', categoryId: 'C001', name: 'PAN Head Self Drilling Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/PAN%20Head%20Self%20Drilling%20Screws%20(3).png?raw=true'], description: 'PAN Head Self Drilling Screws 4x16\nPAN Head Self Drilling Screws 4x19\nPAN Head Self Drilling Screws 4x25\nPAN Head Self Drilling Screws 4x32\nPAN Head Self Drilling Screws 4x38\nPAN Head Self Drilling Screws 4x50\nPAN Head Self Drilling Screws 4x60\nPAN Head Self Drilling Screws 4x75' },
  { id: 'I004', categoryId: 'C001', name: 'PAN Head Self Tapping Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/PAN%20Head%20Self%20Drilling%20Screws%20(4).png?raw=true'], description: 'PAN Head Self Tapping Screws 4x13\nPAN Head Self Tapping Screws 4x16\nPAN Head Self Tapping Screws 4x19\nPAN Head Self Tapping Screws 4x25\nPAN Head Self Tapping Screws 4x32\nPAN Head Self Tapping Screws 4x38\nPAN Head Self Tapping Screws 4x50\nPAN Head Self Tapping Screws 4x60\nPAN Head Self Tapping Screws 4x75' },

  // C002 - SS Mesh
  { id: 'I005', categoryId: 'C002', name: 'SS Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/SS%20Mesh%20(1).png?raw=true'], description: 'SS Mesh (0.25mm) 2.5x50 (125 Feet)\nSS Mesh (0.25mm) 3.0x50 (150 Feet)\nSS Mesh (0.25mm) 3.5x50 (175 Feet)\nSS Mesh (0.25mm) 4.0x50 (200 Feet)\nSS Mesh (0.19mm) 3.0x100 (300 Feet)\nSS Mesh (0.19mm) 4.0x100 (400 Feet)\nSS Mesh (0.19mm) 5.0x100 (500 Feet)' },
  { id: 'I006', categoryId: 'C002', name: 'Aluminium Mesh', images: ['https://github.com/kavutham99raj-art/hitechupvc/blob/main/Aluminium%20mesh%20(2).png?raw=true'], description: 'Aluminium Mesh 2.5x100 (250 Feet)\nAluminium Mesh 3.0x 100 (300 Feet)\nAluminium Mesh 3.5x100 (350 Feet)\nAluminium Mesh 4.0x100 (400 Feet)\nAluminium Mesh 5.0x100 (500 Feet)\nAluminium Mesh 14x14 - 3.0x100 (300 Feet)\nAluminium Mesh 14x14 - 4.0x100 (400 Feet)\nAluminium Mesh 14x14 - 5.0x100 (500 Feet)\nAluminium Mesh Black 18x16 - 3.0x100 (300 Feet)\nAluminium Mesh Black 18x16 - 4.0x100 (400 Feet)\nAluminium Mesh Black 18x16 - 5.0x100 (500 Feet)' },
  { id: 'I007', categoryId: 'C002', name: 'Nylon Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Nylon%20Mesh%20(2).png?raw=true'], description: 'Nylon Mesh 3.0x100 (300 Feet)\nNylon Mesh 4.0x100 (400 Feet)\nNylon Mesh 5.0x100 (500 Feet)' },

  // C003
  { id: 'I008', categoryId: 'C003', name: 'Casement esparg 22mm Back set (PR)', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20esparg%2022mm%20Back%20set%20(1).png?raw=true'], description: 'High quality casement espag with 22mm backset.' },

  // C004 - Colour Door Handles
  { id: 'I009', categoryId: 'C004', name: 'Sliding Door Set - D Handle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Sliding%20Door%20Set%20-%20D%20Handle%20(1).png?raw=true'], description: 'Premium D Handle set for sliding doors.' },
  { id: 'I010', categoryId: 'C004', name: 'Casement Door Set - Regular', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Door%20Set%20-%20Regular%20(1).png?raw=true'], description: 'Standard handle set for casement doors.' },
  { id: 'I011', categoryId: 'C004', name: 'Casement Door Set - Multipoint/Euro Type', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Euro%20Type.png?raw=true'], description: 'Multipoint security handle set for Euro-style doors.' },

  // C005 - CASEMENT HANDLE
  { id: 'I012', categoryId: 'C005', name: 'Casement Handle Spindle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Handle%20Spindle%20(1).png?raw=true'], description: 'Spindle-driven handle for casement windows.' },
  { id: 'I013', categoryId: 'C005', name: 'Casement Handle American', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/image%20135.png?raw=true'], description: 'American style casement handle.' },
  { id: 'I014', categoryId: 'C005', name: 'Cockspur Handle R', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cockspur%20Handle%20R.png?raw=true'], description: 'Regular cockspur handle for windows.' },
  { id: 'I015', categoryId: 'C005', name: 'Cockspur Handle PR R', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cockspur%20Handle%20PR%20R.png?raw=true'], description: 'Premium cockspur handle set.' },

  // C006 - Plastic Items
  { id: 'I016', categoryId: 'C006', name: 'Fastner Cap', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Fastner%20Cap%20(2).png?raw=true'], description: 'Protective cap for fasteners.' },
  { id: 'I017', categoryId: 'C006', name: 'Window Spacer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Window%20Spacer.png?raw=true'], description: 'Plastic spacer for window profile alignment.' },
  { id: 'I018', categoryId: 'C006', name: 'Door Spacer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Door%20Spacer.png?raw=true'], description: 'Plastic spacer for door systems.' },
  { id: 'I019', categoryId: 'C006', name: 'Fixed Louvers', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Fixed%20Louvers.png?raw=true'], description: 'uPVC fixed louver components.' },
  { id: 'I020', categoryId: 'C006', name: 'Bump Stopper', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Bump%20Stopper.png?raw=true'], description: 'Shock absorbing bump stopper.' },
  { id: 'I021', categoryId: 'C006', name: 'Anti lift Block', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Anti%20lift%20Block%20(1).png?raw=true'], description: 'Security block for sliding systems.' },
  { id: 'I022', categoryId: 'C006', name: 'U Packers', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/U%20Packers.png?raw=true'], description: 'U-shaped packers for glazing.' },
  { id: 'I023', categoryId: 'C006', name: 'Glass Packer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Glass%20Packer.png?raw=true'], description: 'Standard glass packer support.' },
  { id: 'I024', categoryId: 'C006', name: 'Mesh Stopper', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Mesh%20Stopper.png?raw=true'], description: 'Plastic stopper for screen mesh.' },

  // C007 - Sliding Handles
  { id: 'I025', categoryId: 'C007', name: 'Popup Handle Slim', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20Slim%20(1).png?raw=true'], description: 'Slim design popup handle.' },
  { id: 'I026', categoryId: 'C007', name: 'Popup Handle WH', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20WH.png?raw=true'], description: 'Standard popup handle in white.' },

  // C008 - Tools
  { id: 'I027', categoryId: 'C008', name: 'Gasket Mesh Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Gasket%20Mesh%20Tool.png?raw=true'], description: 'Roller tool for gasket and mesh installation.' },
  { id: 'I028', categoryId: 'C008', name: 'Moon Knife', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Moon%20Knife.png?raw=true'], description: 'Precision moon knife for uPVC trimming.' },
  { id: 'I029', categoryId: 'C008', name: 'Air Block Gun', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Air%20Block%20Gun.png?raw=true'], description: 'Pneumatic installation gun.' },
  { id: 'I030', categoryId: 'C008', name: 'Digital Measuring Meter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Digital%20Measuring%20Meter.png?raw=true'], description: 'High precision digital distance meter.' },
  { id: 'I031', categoryId: 'C008', name: 'V Cutter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/V%20Cutter.png?raw=true'], description: 'Manual V-notch cutter.' },
  { id: 'I032', categoryId: 'C008', name: 'Angle Cutter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Angle%20Cutter.png?raw=true'], description: 'Angle cutting hand tool.' },
  { id: 'I033', categoryId: 'C008', name: 'Thermocouple', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Thermocouple.png?raw=true'], description: 'Temperature probe for welding machines.' },
  { id: 'I034', categoryId: 'C008', name: 'Corner Cleaning Hand Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Corner%20Cleaning%20Hand%20Tool.png?raw=true'], description: 'Manual scraper for weld cleaning.' },
  { id: 'I035', categoryId: 'C008', name: 'Heating Plate', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Heating%20Plate.png?raw=true'], description: 'Heating element for profile welding.' },

  // C009 - Gaskets
  { id: 'I036', categoryId: 'C009', name: 'Gasket Mesh Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Gasket%20Mesh%20Tool%20(1).png?raw=true'], description: 'Installation tool for gaskets.' },

  // C0010 - Cylinders
  { id: 'I037', categoryId: 'C0010', name: 'Cylinder', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cylinder%20(1).png?raw=true'], description: 'High security door cylinder.' },

  // C0011 - Touch locks
  { id: 'I038', categoryId: 'C0011', name: 'Touch Lock', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Touch%20locks%20(1).png?raw=true'], description: 'Standard touch lock for sliding windows.' },
  { id: 'I039', categoryId: 'C0011', name: 'LG Touch Lock', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/LG%20Touch%20Lock.png?raw=true'], description: 'Premium LG series touch lock.' },

  // C0012 - Bathroom Door Lock set
  { id: 'I040', categoryId: 'C0012', name: 'Bathroom Door Lock', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Bathroom%20Door%20Lock%20(2).png?raw=true'], description: 'Specially designed lock for bathroom uPVC doors.' },

  // C0013 - FrictionStays
  { id: 'I041', categoryId: 'C0013', name: 'FrictionStay', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/image%20163.png?raw=true'], description: 'Adjustable friction stay for casement windows.' },

  // C0014 - Hinges
  { id: 'I042', categoryId: 'C0014', name: '3D Hinge', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Hinges%20(1).png?raw=true'], description: 'High-adjustment 3D door hinge.' },
  { id: 'I043', categoryId: 'C0014', name: '3D Door Hinge Eco', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/3D%20Door%20Hinge%20Eco.png?raw=true'], description: 'Economical 3D door hinge solution.' },
  { id: 'I044', categoryId: 'C0014', name: '2D Hinge', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/2D%20Hinge.png?raw=true'], description: 'Standard 2D adjustable hinge.' },
  { id: 'I045', categoryId: 'C0014', name: 'Butt Hinge Small - 75mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Butt%20Hinge%20Small%20-%2075mm.png?raw=true'], description: '75mm butt hinge for light profiles.' },
  { id: 'I046', categoryId: 'C0014', name: 'Butt Hinge Large - 90mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Butt%20Hinge%20Large%20-%2090mm.png?raw=true'], description: '90mm butt hinge for heavy-duty doors.' },
  { id: 'I047', categoryId: 'C0014', name: 'Concealed Hinge Small - 75mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Butt%20Hinge%20Small%20-%2075mm.png?raw=true'], description: 'Internal concealed hinge system.' },
  { id: 'I048', categoryId: 'C0014', name: 'Concealed Hinge Large - 100mm', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/Concealed%20Hinge%20Large%20-%20100mm.png?raw=true'], description: '100mm heavy duty concealed hinge.' },
  { id: 'I049', categoryId: 'C0014', name: 'L Hinge', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/hinges/L%20Hinge.png?raw=true'], description: 'L-style corner hinge for windows.' },

  // C0015 - Mortise Gears
  { id: 'I050', categoryId: 'C0015', name: 'Mortise Door Set', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Mortise%20Door%20Set.png?raw=true'], description: 'Full mortise gear set for secure door closing.' },

  // C0016 - Machines
  { id: 'I051', categoryId: 'C0016', name: 'Corner Cleaning Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Corner%20Cleaning%20Machine.png?raw=true'], description: 'Professional corner cleaning machine for uPVC profiles.' },
  { id: 'I052', categoryId: 'C0016', name: 'Internal Cleaning (Inner) Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Internal%20Cleaning%20(Inner)%20Machine.png?raw=true'], description: 'Internal weld cleaning equipment.' },
  { id: 'I053', categoryId: 'C0016', name: 'External Cleaning (Outer) Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/External%20Cleaning%20(Outer)%20Machine.png?raw=true'], description: 'Outer profile cleaning machinery.' },
  { id: 'I054', categoryId: 'C0016', name: 'Water Slot Hand Tool 45', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Water%20Slot%20Hand%20Tool%2045.png?raw=true'], description: 'Precision 45-degree water slot cutter.' },
  { id: 'I055', categoryId: 'C0016', name: 'Water Slot Hand Tool 0', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Water%20Slot%20Hand%20Tool%200.png?raw=true'], description: 'Straight water slot cutting tool.' },
  { id: 'I056', categoryId: 'C0016', name: 'Water Slot Hand Tool 90', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Water%20Slot%20Hand%20Tool%2090.png?raw=true'], description: '90-degree slot cutting tool.' },
  { id: 'I057', categoryId: 'C0016', name: 'Portable Welding Machine', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Portable%20Welding%20Machine.png?raw=true'], description: 'Compact welding unit for on-site fabrication.' },
  { id: 'I058', categoryId: 'C0016', name: 'Top & Bottom Cleaning Tool', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Top%20&%20Bottom%20Cleaning%20Tool.png?raw=true'], description: 'Dual-surface cleaning hand tool.' },
  { id: 'I059', categoryId: 'C0016', name: 'Interlock Punching Tool', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Machines/Interlock%20Punching%20Tool.png?raw=true'], description: 'Manual punching tool for sliding interlocks.' },

  // C0017 - Axis
  { id: 'I060', categoryId: 'C0017', name: 'Casement Striker - 9mm Axis', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%209mm%20Axis.png?raw=true'], description: '9mm axis striker for casement windows.' },
  { id: 'I061', categoryId: 'C0017', name: 'Casement Striker - 13mm Axis', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%2013mm%20Axis.png?raw=true'], description: '13mm axis striker for casement windows.' },
  { id: 'I062', categoryId: 'C0017', name: 'Casement Striker - 22mm Axis', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/Casement%20Striker%20-%2022mm%20Axis.png?raw=true'], description: '22mm axis striker for casement windows.' },

  // C0018 - Sliding espags
  { id: 'I063', categoryId: 'C0018', name: 'L-Key Handle', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/L-Key%20Handle.png?raw=true'], description: 'L-key style sliding door handle.' },
  { id: 'I064', categoryId: 'C0018', name: 'C Handle', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/C%20Handle.png?raw=true'], description: 'C-shaped sliding door handle.' },
  { id: 'I065', categoryId: 'C0018', name: 'U Handle', images: ['https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/U%20Handle.png?raw=true'], description: 'U-shaped sliding door handle.' }
];

export const INITIAL_CATALOGS: Catalog[] = [
  { 
    id: 'c1', 
    name: 'Hi-Tech UPVC Hardwares Main Catalog', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%201.png', 
    fileUrl: 'https://drive.google.com/file/d/1HZBuGxOFmFEtDgxxCftNR-UGaHEP_4CH/view?usp=sharing' 
  },
  { 
    id: 'c2', 
    name: 'Lesso UPVC Window & Doors Technical Manual', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%202.png', 
    fileUrl: 'https://drive.google.com/file/d/1NSeKBA34SGDmVCW6b0g039Az-DVwJ2PH/view?usp=sharing' 
  },
  { 
    id: 'c3', 
    name: 'Gemplast Technical Manual', 
    image: 'https://github.com/liffto/hitechupvchardwares-web/blob/main/Assets/Catalog%203.png?raw=true', 
    fileUrl: 'https://drive.google.com/file/d/1AtJ1m-gxEOzkQKIUTEIBxspT63cHARno/view?usp=sharing' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 't1', 
    name: 'Project Partner', 
    company: 'Leading Developer', 
    content: 'Hi-Tech UPVC Hardware is our primary supplier. Their items are most reliable and delivery is always on time.', 
    avatar: 'https://i.pravatar.cc/150?u=hitech' 
  }
];

export const INITIAL_GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/1.jpg?raw=true', caption: 'Installation Excellence' },
  { id: 'g2', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/10.jpg?raw=true', caption: 'Project Showcase' },
  { id: 'g3', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/12.jpg?raw=true', caption: 'Hardware Application' },
  { id: 'g4', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/13.jpg?raw=true', caption: 'Window Systems' },
  { id: 'g5', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/14.jpg?raw=true', caption: 'Quality Finishing' },
  { id: 'g6', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/15.jpg?raw=true', caption: 'Modern Designs' },
  { id: 'g7', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/16.jpg?raw=true', caption: 'Durable Hardware' },
  { id: 'g8', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/19.jpg?raw=true', caption: 'Product Display' },
  { id: 'g9', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/2.jpg?raw=true', caption: 'Precision Engineering' },
  { id: 'g10', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/20.jpg?raw=true', caption: 'Technical Integration' },
  { id: 'g11', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/3.jpg?raw=true', caption: 'Residential Project' },
  { id: 'g12', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/5.jpg?raw=true', caption: 'Commercial Solutions' },
  { id: 'g13', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/6.jpg?raw=true', caption: 'Aesthetic Hardware' },
  { id: 'g14', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/7.jpg?raw=true', caption: 'Reliable Systems' },
  { id: 'g15', url: 'https://github.com/liffto/hitechupvc-dev-ver/blob/main/Gallery/9.jpg?raw=true', caption: 'Installation View' }
];