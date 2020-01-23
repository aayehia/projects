function handleSubmit(event) {
    event.preventDefault()

    const baseURL = "http://localhost:5000/sentiment";
    const url = document.getElementById('url').value;

    if (Client.validateUrl(url)) {
        fetch(baseURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: url})
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('polarity').innerHTML = res.polarity
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('polarity-conf').innerHTML = res.polarity_confidence
                document.getElementById('subjectivity-conf').innerHTML = res.subjectivity_confidence
            })
    } else {
        alert("The URL is not valid. Please check your URL")

    }
}

export {handleSubmit}
