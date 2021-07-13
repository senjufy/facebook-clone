import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Fahim Islam",
        src: "https://i.pinimg.com/736x/16/cd/ea/16cdead23629f526f975f8e3001a1dc8.jpg",
        profile: "https://i.imgur.com/DpfL8rb.jpg"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    }
]

function Stories() {
        
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>

    )
}




export default Stories
