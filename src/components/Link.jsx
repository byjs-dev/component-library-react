export default function Link({href, title, text}) {
    return (
        <a href={href}
           title={title}
           className="text-3xl font-bold underline">
            {text}
        </a>
    )
}
