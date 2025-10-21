import { Link } from "react-router-dom";

const Home = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Vương Ngũ Tín Thành",
            role: "Full-stack Developer",
            image: "/vntthanh/profilepic.jpg",
            description:
                "Skilled in React, TypeScript, Node.js, and MongoDB with expertise in building comprehensive web applications.",
        },
        {
            id: 2,
            name: "Nguyễn Hiền Tuấn Anh",
            role: "Front-end Developer",
            image: "/nhtanh/tnnhuaa.jpg",
            description:
                "Specializing in creating beautiful and responsive user interfaces.",
        },
        {
            id: 3,
            name: "Đoàn Thành Phát",
            role: "Back-end Developer",
            image: "/dtphat/DoanThanhPhat.jpg",
            description:
                "Passionate about server-side development with C/C++, Python, and Node.js for building scalable systems.",
        },
        {
            id: 4,
            name: "Nguyễn Hoàng Phi Hùng",
            role: "Fullstack Developer",
            image: "/nhphung/profilepic.jpg",
            description:
                "Proficient in React, TypeScript, and Tailwind CSS with experience in both frontend and backend development.",
        },
        {
            id: 5,
            name: "Huỳnh Sĩ Luân",
            role: "Backend Developer",
            image: "/hsluan/picture.jpg",
            description:
                "Expert in Java, Spring Boot, and MySQL with focus on RESTful API and authentication systems.",
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
