

const Member5 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left: avatar & contact */}
          <div className="md:w-1/3 p-6 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800">
            <img
              src="/nhphung/profilepic.jpg"
              alt="Nguyễn Hoàng Phi Hùng"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-sm"
            />
            <h2 className="mt-4 text-2xl font-semibold">Nguyễn Hoàng Phi Hùng</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Fullstack Developer • Student</p>

            <div className="mt-4 w-full">
              <a
                href="https://github.com/nhphunng"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block w-full text-center px-4 py-2 border rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                GitHub: nhphunng
              </a>
            </div>

          </div>
          <div className="md:w-2/3 p-6">

            <section className="mt-6">
              <h4 className="text-lg font-medium">Skills</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Git", "HTML", "CSS"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h4 className="text-lg font-medium">Recent projects</h4>
              <ul className="mt-2 list-inside list-disc text-gray-700 dark:text-gray-300">
                <li>
                  Vocaboost - Learning English Vocabulary website <a href="https://github.com/nhphunng/Intro2SE-23CLC06-Group06.git" className="text-blue-600">View</a>
                </li>
                <li>
                  Time Jar - Naver Hackathon<a href="#" className="text-blue-600"></a>
                </li>
              </ul>
            </section>

            <section className="mt-6">
              <h4 className="text-lg font-medium">Education</h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Bachelor of Information Technology — University of Science, VNU-HCM (2023 - 2027)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member5;