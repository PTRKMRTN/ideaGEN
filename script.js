actions = [
    "Create",
    "Craft",
    "Stream",
    "Service",
    "Produce",
    "Re-sell",
    "Manufacture",
    "Illustrate",
    "Strategise",
    "Research",
    "Design",
    "Develop",
    "Discover",
    "Conceptualise",
    "Deliver",
    "Sculpt",
    "Model",
    "3D scan",
    "Compose",
    "Direct",
    "Plan",
    "Organise",
    "Manage",
    "Offer services for"
];

industries = [
    "Automotive",
    "Medical",
    "Makerspace",
    "3d Printing",
    "Internet",
    "Social media",
    "Construction",
    "Hospitality",
    "Government",
    "Agri",
    "Aerospace",
    "Fashion",
    "Engineering",
    "Data Mining",
    "Design",
    "Electronic",
    "Digital",
    "Entertainment",
    "Health",
    "Film",
    "Video game",
    "Music",
    "Media",
    "Industrial",
    "Real estate",
    "Wholesale",
    "Utility",
    "Crypto",
    "Hacker",
    "IT",
    "UX"
];

interests = [
    "Automotive",
    "Drifting",
    "GT Racing",
    "Gaming",
    "Design",
    "Concept art",
    "anime/manga",
    "sci-fi",
    "retro-gaming",
    "1980's",
    "Cyberpunk",
    "Supra",
    "3D printing",
    "ArchVis",
    "tech",
    "Mech",
    "Gunpla",
    "Illustration",
    "Aliens franchise",
    "Art books",
    "VR",
    "AR"
];

platforms = [
    "Bricks and mortar store",
    "Online store",
    "Social page",
    "Portal",
    "App",
    "Marketplace store",
    "Blog",
    "Youtube channel",
    "Twitch stream",
    "ebay store",
    "Amazon store",
    "Online marketplace",
    "Asset store",
    "Blockchain"
];

products = [
    "Apparel",
    "3D prints",
    "Accessories",
    "Car aero",
    "Apps",
    "websites",
    "Games",
    "Plug-ins",
    "Art",
    "Murals",
    "Paintings",
    "Merch",
    "3D Scans",
    "Collectibles",
    "Props",
    "Figurines",
    "Templates",
    "Libraries",
    "Designs",
    "NFT",
    "Crypto art",
    "T-shirts",
    "Hoodies",
    "Assets",
    "Add-ons",
    "Fonts",
    "Resources",
    "Gear",
    "Instruments",
    "Tools",
    "Phone cases",
    "Posters",
    "Collections",
    "Weapons",
    "Cards"

];

revenues = [
    "Subscription",
    "pay-per-click",
    "Monthly payment",
    "Annual payment",
    "Once-off payment",
    "Donation",
    "Crowd-fund",
    "Rent out",
    "Lease",
    "Investment",
    "Ad",
    "Transactional percentage",
    "Usage-based",
    "Pay-per-seat",
    "Freemium",
    "Data sales",
    "Mark-up",
    "Service",
    "Rent-to-buy",
    "auction",
    "pay-per-view",
    "Raffle"
];

groups = [
    "Consumers",
    "Government",
    "Corporations",
    "Agencies",
    "Sporting teams",
    "Racing teams",
    "Small business",
    "Nerds",
    "Doctors",
    "Dentists",
    "Agents",
    "Engineers",
    "Enthusiasts",
    "Homeless",
    "Disabled",
    "Policemen",
    "Carpenters",
    "Unemployed",
    "Contractors",
    "Employees",
    "Designers",
    "Developers",
    "Artists",
    "Managers",
    "Owners",
    "Chefs",
    "Diplomats",
    "Farmers",
    "Scientists",
    "Lawyers",
    "Pilots",
    "Teachers",
    "Freelancers",
    "Drivers",
    "Community groups",
    "Kids",
    "Adults",
    "Men",
    "Students",
    "Women",
    "Prisoners",
    "Charities",
    "Clubs",
    "Meetups",
    "Mechanics",
    "Comedians",
    "Animals",
    "The elderly",
    "Believers",
    "Gangs",
    "Studios",
    "Painters",
    "Schools",
    "Atheists",
    "Manufacturers",
    "Suppliers",
    "Scene",
    "Users"
];

$(document).ready(function () {
    generate();
    $("#spin").click(function () {
        generate();
    });
});

function generate() {
    console.log(actions.length);
    console.log(industries.length);
    console.log(interests.length);
    console.log(platforms.length);
    console.log(products.length);
    console.log(revenues.length);
    console.log(groups.length);
    var actionR = Math.floor(Math.random() * actions.length);
    var industryR = Math.floor(Math.random() * industries.length);
    var interestR = Math.floor(Math.random() * interests.length);
    var platformR = Math.floor(Math.random() * platforms.length);
    var productR = Math.floor(Math.random() * products.length);
    var revenueR = Math.floor(Math.random() * revenues.length);
    var groupR = Math.floor(Math.random() * groups.length);
    /*     $("h2").text("We " + actions[actionR] + " " + industries[industryR] + " " + products[productR] + " utilising a " + platforms[platformR] + " with a " + interests[interestR] + " motif, targeting " + groups[groupR] + " via "  + revenues[revenueR] + " model. "  ); */
    $("h2").text("For " + groups[groupR] + ", we " + actions[actionR] + " " + interests[interestR] + " themed " + industries[industryR] + " " + products[productR] + ", with a " + revenues[revenueR] + " revenue model " + platforms[platformR] + ".");
}
