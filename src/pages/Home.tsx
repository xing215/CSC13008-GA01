import { Link } from "react-router-dom";

const Home = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Member 1",
            role: "Team Leader",
            image: "https://via.placeholder.com/300",
            description:
                "Leading the team with expertise in project management and full-stack development.",
        },
        {
            id: 2,
            name: "Nguyen Hien Tuan Anh",
            role: "Frontend Developer",
            image: "/nhtanh/tnnhuaa.jpg",
            description:
                "Specializing in creating beautiful and responsive user interfaces.",
        },
        {
            id: 3,
            name: "Member 3",
            role: "Backend Developer",
            image: "https://via.placeholder.com/300",
            description:
                "Expert in server-side technologies and database management.",
        },
        {
            id: 4,
            name: "Member 4",
            role: "UI/UX Designer",
            image: "https://via.placeholder.com/300",
            description: "Crafting intuitive and engaging user experiences.",
        },
        {
            id: 5,
            name: "Member 5",
            role: "Quality Assurance",
            image: "https://via.placeholder.com/300",
            description:
                "Ensuring top-notch quality and reliability of our solutions.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="mb-16">
                <div className="bg-gradient-to-r from-primary to-teal-500 text-white rounded-2xl p-12 shadow-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Team
                    </h1>
                    <p className="text-lg opacity-80 max-w-3xl">
                        We are a dedicated team of developers and designers
                        committed to creating exceptional web experiences. Get
                        to know each member and discover their unique
                        contributions to our projects.
                    </p>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    Meet Our Team
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <Link
                            key={member.id}
                            to={`/member/${member.id}`}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="aspect-square overflow-hidden bg-gray-200">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {member.description}
                                </p>
                                <div className="mt-4 flex items-center text-primary group-hover:translate-x-2 transition-transform">
                                    <span className="text-sm font-medium">
                                        View Profile
                                    </span>
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
