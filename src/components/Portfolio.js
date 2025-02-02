import React from 'react';

const projects = [
    {
        title: 'Project One',
        image: 'https://source.unsplash.com/random/1',
        link: '#',
    },
    {
        title: 'Project Two',
        image: 'https://source.unsplash.com/random/2',
        link: '#',
    },
    // 추가 프로젝트를 여기에 추가하세요
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-gray-800">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
