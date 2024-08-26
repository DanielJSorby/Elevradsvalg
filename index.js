const stemme = document.getElementById("stemme");

let kandidater = {
	[1]: { Navn: "Daniel Johan Sørby" },
	[2]: { Navn: "Åse Lurås" },
	[3]: { Navn: "Johan Album Arntsen" },
};

for (let kandidat in kandidater) {
	let option = document.createElement("option");
	option.value = kandidater[kandidat].Navn;
	option.text = kandidater[kandidat].Navn;
	stemme.appendChild(option);
}

function submit() {
	let navnInput = document.getElementById("navn").value;
	let itsMeIdInput = document.getElementById("itsMeId").value;
	let itsMeIdInputCheck = document.getElementById("itsMeIdCheck").value;
	let stemmeInput = document.getElementById("stemme").value;

	if (itsMeIdInput != itsMeIdInputCheck) {
		alert("ItsMe ID er ikke likt i begge feltene");
		return;
	} else {
		navn = navnInput.replace(/ /g, "+");
		console.log(navn);
		let link = `https://docs.google.com/forms/d/e/1FAIpQLScHlqz47MTUMJLqWaiK-HKH6AJhlVsPOd_ueYCCdPCoxgQIWQ/formResponse?&submit=Submit?usp=pp_url&entry.1946623723=${navn}&entry.1745283202=${itsMeIdInput}&entry.875638796=${stemmeInput}`;
		console.log(link);

		// Åpne lenken i en ny fane
		let newWindow = window.open(link, "_blank");

		setTimeout(() => {
			newWindow.close();
		}, 1000);
	}
}
