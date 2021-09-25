const puppeteer = require("puppeteer");

let dt = new Date();

var myArgs = process.argv.slice(2);
let day1 = parseInt(myArgs[0]);
let day2 = parseInt(myArgs[1]);
let year = parseInt(myArgs[2]);

async function getVul1(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 6; i++) {
		const [date] = await page.$x(
			`//*[@id="block-views-block-us-cert-current-activity-block-4"]/div/div/div[2]/div[${i}]/div[1]/span[2]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split(" ")[1]) >= day1 &&
			parseInt(String(dateVul).split(" ")[1]) <= day2 &&
			parseInt(String(dateVul).split(" ")[2]) === year
		) {
			const [link] = await page.$x(
				`//*[@id="block-views-block-us-cert-current-activity-block-4"]/div/div/div[2]/div[${i}]/h3/span/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			const [title] = await page.$x(
				`//*[@id="block-views-block-us-cert-current-activity-block-4"]/div/div/div[2]/div[${i}]/h3/span/a`,
			);
			const getTitle = await link.getProperty("textContent");
			const titleVul = await getTitle.jsonValue();

			let data = { date: dateVul, Title: titleVul, link: linkVul };
			console.log(data);
		}
	}
	browser.close();
}
async function getVul2(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div/div/section/div[2]/div/div[1]/section/article[${i}]/section[1]/div[2]/span[2]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();
		if (
			parseInt(String(dateVul).split(" ")[2]) >= day1 &&
			parseInt(String(dateVul).split(" ")[2]) <= day2 &&
			parseInt(String(dateVul).split(" ")[4]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div/div/section/div[2]/div/div[1]/section/article[${i}]/section[1]/div[1]/h3/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			const [title] = await page.$x(
				`/html/body/div/div/section/div[2]/div/div[1]/section/article[${i}]/section[1]/div[1]/h3/a`,
			);
			const getTitle = await link.getProperty("textContent");
			const titleVul = await getTitle.jsonValue();

			let data = { date: dateVul, Title: titleVul, link: linkVul };
			console.log(data);
		}
	}
	browser.close();
}

async function getVul3(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 20; i++) {
		const [date] = await page.$x(
			`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[4]/span`,
		);
		if (date) {
			const getDate = await date.getProperty("textContent");
			const dateVul = await getDate.jsonValue();
			if (
				parseInt(String(dateVul).split(" ")[2]) >= day1 &&
				parseInt(String(dateVul).split(" ")[2]) <= day2 &&
				parseInt(String(dateVul).split(" ")[3]) === year
			) {
				const [link] = await page.$x(
					`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[1]/a`,
				);
				const getLink = await link.getProperty("href");
				const linkVul = await getLink.jsonValue();

				const [title] = await page.$x(
					`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[1]/a`,
				);
				const getTitle = await link.getProperty("textContent");
				const titleVul = await getTitle.jsonValue();

				const [impact] = await page.$x(
					`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[2]/div`,
				);
				const getImpact = await impact.getProperty("textContent");
				const impactVul = await getImpact.jsonValue();

				const [status] = await page.$x(
					`/html/body/div[2]/div[1]/main/div/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[3]/text()`,
				);
				const getStatus = await status.getProperty("textContent");
				const statusVul = await getStatus.jsonValue();

				let data = {
					date: dateVul,
					Title: titleVul,
					impact: impactVul,
					status: statusVul,
					link: linkVul,
				};
				console.log(data);
			}
		}
	}
	browser.close();
}
async function getVul4(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/td[5]/span/time`,
		);

		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split(" ")[0]) >= day1 &&
			parseInt(String(dateVul).split(" ")[0]) <= day2 &&
			parseInt(String(dateVul).split(" ")[2]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/th/span/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			const [title] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/th/span/a`,
			);
			const getTitle = await title.getProperty("textContent");
			const titleVul = await getTitle.jsonValue();

			const [synopsis] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/td[2]/span`,
			);
			const getSynopsis = await synopsis.getProperty("textContent");
			const synopsisVul = await getSynopsis.jsonValue();

			const [produit] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/td[4]/span`,
			);
			const getProduit = await produit.getProperty("textContent");
			const produitVul = await getProduit.jsonValue();

			let data = {
				date: dateVul,
				title: titleVul,
				synopsis: synopsisVul,
				produit: produitVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}

async function getVul5(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 10; i++) {
		// page.waitForSelector(`\/\/*[@id="tableWraper"]/table/tbody/tr[${i}]/td[3]`);
		const [date] = await page.$x(
			`/html/body/div[5]/div/section[3]/div[1]/div[1]/article[${i}]/p[1]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split(" ")[0]) >= day1 &&
			parseInt(String(dateVul).split(" ")[0]) <= day2 &&
			parseInt(String(dateVul).split(" ")[2]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[5]/div/section[3]/div[1]/div[1]/article[${i}]/h3/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}
async function getVul6(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	try {
		for (let i = 2; i <= 10; i++) {
			const [date] = await page.$x(
				`/html/body/div[4]/div/section/div/div/div/div/div[3]/div[5]/div/div/table/tbody/tr[${i}]/td[3]`,
			);
			const getDate = await date.getProperty("textContent");
			const dateVul = await getDate.jsonValue();

			if (
				parseInt(String(dateVul).split(" ")[0]) >= day1 &&
				parseInt(String(dateVul).split(" ")[0]) <= day2 &&
				parseInt(String(dateVul).split(" ")[2]) === year
			) {
				const [link] = await page.$x(
					`/html/body/div[4]/div/section/div/div/div/div/div[3]/div[5]/div/div/table/tbody/tr[${i}]/td[1]/a`,
				);
				const getLink = await link.getProperty("href");
				const linkVul = await getLink.jsonValue();

				let data = {
					date: dateVul,
					link: linkVul,
				};
				console.log(data);
			}
		}
		browser.close();
	} catch (error) {
		browser.close();
	}
}
async function getVul7(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(`/html/body/div[2]/p[9]/tt[${i}]`);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).substring(1).split(" ")[0]) >= day1 &&
			parseInt(String(dateVul).substring(1).split(" ")[0]) <= day2 &&
			parseInt(String(dateVul).substring(1).split(" ")[2]) === year
		) {
			const [link] = await page.$x(`/html/body/div[2]/p[9]/strong[${i}]/a`);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}
async function getVul8(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[2]/section[2]/div/div[1]/div/table[1]/tbody/tr[${i}]/td[2]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split(" ")[2]) >= day1 &&
			parseInt(String(dateVul).split(" ")[2]) <= day2 &&
			parseInt(String(dateVul).split(" ")[4]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[2]/section[2]/div/div[1]/div/table[1]/tbody/tr[${i}]/td[1]/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}
async function getVul9(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[3]/div[3]/div/div[2]/div/div/div/div/div[2]/div/table/tbody/tr[1]/td[4]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();
		console.log(dateVul);
		if (
			parseInt(String(dateVul).split("-")[2]) >= day1 &&
			parseInt(String(dateVul).split("-")[2]) <= day2 &&
			parseInt(String(dateVul).split("-")[0]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[3]/div[3]/div/div[2]/div/div/div/div/div[2]/div/table/tbody/tr[1]/td[1]/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}
async function getVul10(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[3]/dl[1]/dd[${i}]/table/tbody/tr[1]/td[2]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split("-")[2]) >= day1 &&
			parseInt(String(dateVul).split("-")[2]) <= day2 &&
			parseInt(String(dateVul).split("-")[0]) === year
		) {
			const [link] = await page.$x(`/html/body/div[3]/dl[1]/dt[${i}]/h3/a`);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}

async function getVul11(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[3]/div[2]/div/div[2]/div/div[2]/div[2]/section/div[2]/div[${i}]/div/div[3]/div/span[1]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split("-")[1]) >= day1 &&
			parseInt(String(dateVul).split("-")[1]) <= day2 &&
			parseInt(String(dateVul).split("-")[2]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[3]/div[2]/div/div[2]/div/div[2]/div[2]/section/div[2]/div[${
					i + 1
				}]/div/div[1]/a`,
			);

			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}

async function getVul12(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/form/div/div[2]/table/tbody[2]/tr[${i}]/td[6]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split("-")[2]) >= day1 &&
			parseInt(String(dateVul).split("-")[2]) <= day2 &&
			parseInt(String(dateVul).split("-")[0]) === year
		) {
			const [link] = await page.$x(
				`/html/body/form/div/div[2]/table/tbody[2]/tr[${i}]/td[2]/a`,
			);

			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}

async function getVul13(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/form/div/div[2]/table/tbody[2]/tr[${i}]/td[6]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split("-")[2]) >= day1 &&
			parseInt(String(dateVul).split("-")[2]) <= day2 &&
			parseInt(String(dateVul).split("-")[0]) === year
		) {
			const [link] = await page.$x(
				`/html/body/form/div/div[2]/table/tbody[2]/tr[${i}]/td[2]/a`,
			);

			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}
async function getVul14(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[2]/div[3]/div/div[3]/section/div/div[2]/div/div/div/div/div[2]/div/div/div/table/tbody/tr[${i}]/td[6]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split("-")[2]) >= day1 &&
			parseInt(String(dateVul).split("-")[2]) <= day2 &&
			parseInt(String(dateVul).split("-")[0]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[2]/div[3]/div/div[3]/section/div/div[2]/div/div/div/div/div[2]/div/div/div/table/tbody/tr[${i}]/td[3]`,
			);

			const getLink = await link.getProperty("textContent");
			const linkVul = await getLink.jsonValue();

			let data = {
				date: dateVul,
				Description: linkVul,
				from: "Siemens",
			};
			console.log(data);
		}
	}
	browser.close();
}
Promise.all(
	getVul1("https://us-cert.cisa.gov/ncas/current-activity"),
	getVul2("https://www.cert.ssi.gouv.fr/2021/"),
	getVul3("https://access.redhat.com/security/vulnerabilities/"),
	getVul4(
		"https://access.redhat.com/errata/#/?q=&p=1&sort=portal_publication_date%20desc&rows=10&portal_advisory_type=Security%20Advisory",
	),
	getVul5("https://ubuntu.com/security/notices"),
	getVul12("https://security.paloaltonetworks.com/?sort=-date"),
	getVul13("https://security.paloaltonetworks.com/?sort=-updated"),
	getVul14(
		"https://new.siemens.com/global/en/products/services/cert.html#SecurityPublications",
	),
	getVul10("https://httpd.apache.org/security/vulnerabilities_24.html"),
	getVul7("https://www.debian.org/security/"),
	getVul8("https://www.oracle.com/security-alerts/"),
);
// getVul1("https://us-cert.cisa.gov/ncas/current-activity");
// getVul2("https://www.cert.ssi.gouv.fr/2021/");
// getVul3("https://access.redhat.com/security/vulnerabilities/");
// getVul4(
// 	"https://access.redhat.com/errata/#/?q=&p=1&sort=portal_publication_date%20desc&rows=10&portal_advisory_type=Security%20Advisory",
// );
// getVul5("https://ubuntu.com/security/notices");
// getVul6("https://support.apple.com/fr-fr/HT201222"); ********
// getVul7("https://www.debian.org/security/");
// getVul8("https://www.oracle.com/security-alerts/");
// getVul9("https://www.vmware.com/security/advisories.html"); ***********
// getVul10("https://httpd.apache.org/security/vulnerabilities_24.html");
// getVul11("https://www.fortiguard.com/psirt");*****************************
// getVul12("https://security.paloaltonetworks.com/?sort=-date");
// getVul13("https://security.paloaltonetworks.com/?sort=-updated");
// getVul14(
// 	"https://new.siemens.com/global/en/products/services/cert.html#SecurityPublications",
// );
