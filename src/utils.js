export const removeNull = (articles) => {
    let content = articles.filter(story => {
        return story.description && story.title !== null;
    })

    let allContent = content.filter(story => {
        return story.title !== '[Removed]';
    })

    return allContent;
}
