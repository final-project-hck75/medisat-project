function formatDate(value: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(value).toLocaleDateString("id-ID", options)
}

export default formatDate