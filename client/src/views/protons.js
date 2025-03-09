import React from "react";
import VideoCard from "../components/video-card/VideoCard";
import "./protons.css";
import logo from '../assets/logo-protons.png';

function Protons() {
    const videoData = [
        {
            title: "CS50x",
            description: "Ok first let's discover the basics of programming and computer science \
            through many projects and many programming languages. At the end, you’ll take an intro on web \
            development and database management, and you’ll be \
            required to submit a final project of your choosing.\
            (You can enrol for free, \
            no need for the certified certificate, you’ll be given a PDF once \
            you’re done with it)",
            videoUrl: "pSc6RGEBLAQ?si=GxT8XdY4E4AU_TOe",
            resources: [
                { name: "Arabic youtube playlist", link: "https://www.youtube.com/watch?v=pSc6RGEBLAQ&list=PLknwEmKsW8OvMsFbU9zo8oJCprAsgc4LO" },
                { name: "Original youtube playlist", link: "https://www.youtube.com/watch?v=3LPJfIKxwWc&list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4" },
                { name: "Course link on EDX", link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?g_acctid=724-505-4034&g_campaign=gs-b2c-nonbrand-tier1geo-partner-harvard-core&g_campaignid=15417765031&g_adgroupid=131210224478&g_adid=588991333656&g_keyword=cs50&g_keywordid=kwd-296840910&g_network=g&utm_source=google&utm_campaign=gs-b2c-nonbrand-tier1geo-partner-harvard-core&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=15417765031&hsa_grp=131210224478&hsa_ad=588991333656&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsYZ5N4ge4fu3ofyRBB9HsDpx20L4UTzndigQ4AAj04LpPOtGC3vp2RoCQ1oQAvD_BwE" }
            ]
        },
        {
            title: "Data structures and algorithms",
            description: "There’s no building without a strong foundation,\
            and data structures and algorithms form the foundation of becoming an excellent software engineer.\
            We've already covered some basics, like lists, dictionaries, searching, and sorting.\
            Now, let's continue to build on that knowledge.\
            In practical scenarios, you likely won’t implement data structures from scratch.\
            However, it’s crucial to understand how they work, when to use them, and the pros and cons of each choice.",
            videoUrl: "owCqVRbZlbg?si=2kfjKIB2-Ss0WnwI",
            resources: [
                {name: "DS adel nassim", link: "https://www.youtube.com/playlist?list=PLCInYL3l2AajqOUW_2SwjWeMwf4vL4RSp"},
                {name: "algorithms hard code", link: "https://www.youtube.com/playlist?list=PLwCMLs3sjOY6KH-8c9F-lMWn-r02hyoV_"},
                {name: "Leeat code (website to solve problems)", link: ""}
            ]
        },
        {
            title: "Object Oriented Programming",
            description: "Object-Oriented Programming (OOP) is another essential concept for building solid software.\
            It helps you structure your code by organizing it around objects, which represent real-world entities.\
            We've explored how classes, objects, inheritance, and encapsulation work, but there’s more to dive into.\
            In practical use, OOP allows you to write clean, reusable, and maintainable code.\
            While you might not always use every feature of OOP,\
            understanding when and how to apply it is key to designing efficient software systems.",
            videoUrl: "fK2lLVqc8UY?si=0cPb27FFWYeegduJ",
            resources: [
                {name: "Codezilla playlist", link: "https://www.youtube.com/playlist?list=PLuXY3ddo_8nzUrgCyaX_WEIJljx_We-c1"},
                {name: "Eldesouky playlist", link: "https://www.youtube.com/watch?v=6U6WtWG3NrA&list=PL1DUmTEdeA6KLEvIO0NyrkT91BVle8BOU"}   
            ]
        },
        {
            title: "Databases",
            description: "Databases are the backbone of most applications,\
            enabling efficient storage, retrieval, and management of data.\
            We've covered the basics of relational databases and SQL, but there's more to explore,\
            such as NoSQL, indexing, and database optimization.\
            In real-world applications, you won’t always build a database from scratch,\
            but you need to understand how different databases work, how to design efficient schemas,\
            and how to choose the right type of database for your specific needs.",
            videoUrl: "GBeWKa1Lc6I?si=5NfjGKzj8c3BM151",
            resources: [
                {name: "mysql playlist", link: "https://www.youtube.com/watch?v=Apq8FuGNODM&list=PLF8OvnCBlEY25O_Ql0CrgQUAc5NVYkWF2"},
                {name: "PostgreSQL tutorial", link: "https://www.youtube.com/watch?v=eMIxuk0nOkU"}
            ]

        },
        {
            title: "Web Development",
            description: "Web development is a key skill for building modern applications,\
            and it’s divided into two main areas: frontend and backend.\
            The frontend focuses on what users see and interact with,\
            while the backend handles data processing, storage, and server-side logic.\
            We've touched on the basics of HTML, CSS, and JavaScript for the frontend,\
            and backend technologies like Node.js and databases.\
            In practice, understanding both sides will help you build full-stack applications that are efficient,\
            user-friendly, and scalable.",
            videoUrl: "MDkITKWxOIE?si=RUGfdFvIJbg1aoFo",
            resources: [
                {name: "nodejs playlist", link: "https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2"},
                {name: "react js", link: "https://www.youtube.com/playlist?list=PLQtNtS-WfRa9LbmD8ON7rWhn-AtKTGdkn"},
            ]

        },
        {
            title: "APP Development",
            description: "Mobile app development involves building applications for mobile devices,\
            and there are several ways to do it. Native languages like Java and Kotlin are used for Android apps,\
            while Objective-C is specific to iOS. However, with cross-platform tools like Flutter and React Native,\
            you can write code once and deploy it on both Android and iOS, and even other platforms,\
            making development more efficient and versatile."            ,
            videoUrl: "0Yrqa_qIAps?si=fIP9tuJUaWntOCSx",
            resources: [
                {name: "Flutter playlist", link: "https://www.youtube.com/playlist?list=PLoMmMinVeSkud4SURAo6ccR6MduZWTdTq"}
            ]

        },
        {
            title: "UI/UX",
            description: "UI/UX design is crucial for creating software that not only works well\
            but is also enjoyable and intuitive to use. UI (User Interface) focuses on the look and feel,\
            including layout, colors, and typography, while UX (User Experience) ensures that the application is easy to navigate\
            and meets users' needs.We've touched on some basic design principles,\
            but understanding user behavior and learning how to design for usability will greatly improve the quality of your software,\
            making it more engaging and effective.",
            videoUrl: "LNMvCBxHAEU?si=e-KpXuAst8AMcLg9",
            resources: [
                {name: "Figma course", link: "https://www.youtube.com/playlist?list=PLjzhiGLyugKynpBi7v2AWMCJgTrRI6Ne-"},
                {name: "Adobe XD course", link: "https://www.youtube.com/playlist?list=PLmQ0KfqeaHAuud_Aav-94nfToArf6Uh4K"}
            ]

        },
        {
            title: "Game Development",
            description: "At this point you probably know more than us about the topic, \
            and to be honest, this field is only about three things: maths, \
            physics, and making mistakes to learn from them, nothing \
            more. The only thing we can recommend is that you join game \
            jams (a game development contest that lasts for an interval, \
            sometimes a day or two, and you have to start and end the \
            game within the internal). You can find many game jams in the link below, \
            and if you need any advice, get in touch, since several \
            volunteers have participated in some.",
            videoUrl: "ZBHltQOO7pI?si=hXi6b6TTf-wE-uTl",
            resources: [
                { name: "Game Jams", link: "https://itch.io/jams" }
            ]
        },
        {
            title: "CTFs",
            description: "Capture the Flag (CTF) challenges are a fun and interactive way to learn about cybersecurity.\
            These challenges simulate real-world security scenarios, helping you understand how hackers exploit systems\
            and how to defend against them.\
            CTFs are a great starting point for anyone interested in security,\
            as they cover various topics like cryptography, reverse engineering, web vulnerabilities, and more.\
            They provide hands-on experience that is essential for developing practical security skills.",
            videoUrl: "ulGr98J_0lY?si=BxJIpy3n4WGh_KlU",
            resources: [
                {name: "PicoCTF", link: "https://picoctf.org/"},
                {name: "Over the Wire", link: "https://overthewire.org/wargames/"},
                {name: "pico ctf 2019 playlist", link: "https://www.youtube.com/playlist?list=PLdxfDCLPISTTClAP2JCUBzrx4YpIvXgZY"}
            ]
        },
        {
            title: "Competitive Programming",
            description: "Probably one of the most important topics mentioned in this list,\
            and for a good reason. Problem solving not only gives you\
            many opportunities, but it also helps you face life problems\
            better in general by improving your thinking process all around.\
            Other than that, there are many, many contests based on\
            problem solving, some of which can offer you an opportunity of\
            studying abroad or landing a job (both of which were done by a\
            volunteer here!). Even more, almost all software engineering\
            job interviews require good problem solving skills.",
            videoUrl: "YImgfOWAPCQ?si=nfN6cRoNBWoUqStu",
            resources: [
                {name: "C++ Playlist", link: "https://www.youtube.com/playlist?list=PLPt2dINI2MIZPFq6HyUB1Uhxdh1UDnZMS"},
                {name: "Atcoder problems sorted", link: "https://kenkoooo.com/atcoder/#/table/"},
                {name: "mostafa saad sheet", link: "https://docs.google.com/spreadsheets/d/1iJZWP2nS_OB3kCTjq8L6TrJJ4o-5lhxDOyTaocSYc-k/edit?gid=84654839#gid=84654839"},
            ]

        },
    ];

    return (
        <div className="protons-container">
            <img className="protons_logo" src={logo} alt="logo" />
            <h1><span>Once a Proton, Forever a Proton</span></h1>

            <div className="intro-section">
                <h2>Hello Our Protons</h2>
                <p>We miss all of you a lot, and we wish you well and hope you're enjoying your lives.</p>
                <p>
                Have you thought about what you’ll do after Protons? Was the closing really just the end of the program, 
                or was it the beginning of a life-long journey, too? In fact, Protons was just the beginning, and we’ve 
                made sure to give you some of the basics you’ll need to conquer the world of programming.
                </p>
                <p>
                Here, we’ve included some resources we think would be of use to you in several tracks (some of which we’ve 
                tried personally), so feel free to explore the subjects below. If stuck, don’t hesitate to contact any of 
                us for help!
                </p>
                <br></br>
                <h2>Software Tracks</h2>
                <p>No one deny that software is a well established firld and it's still growing, so let's dive into some tracks in the software field.</p>
            </div>

            <div className="video-section">
                <div className="video-box">
                    {videoData.map((video, index) => (
                        <VideoCard
                            key={index}
                            title={video.title}
                            description={video.description}
                            videoUrl={video.videoUrl}
                            resources={video.resources}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Protons;
