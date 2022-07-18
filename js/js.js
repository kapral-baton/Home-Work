const question = confirm('Tell me three most important words 💚');

if (question) {
    const codeOfZero = 49;
    const codeOfNine = 57;
    let a = 1;
    let text =[];

    do {
        let words = prompt(`Enter word #${a}`, '')
        if (words !== null && words !== ``) {
            let hasNumber = false;
            for (let i = 0; i < words.length; i++) {
                let tmpCode = words.charCodeAt(i);

                if (tmpCode >= codeOfZero && tmpCode <= codeOfNine) {
                    hasNumber = true;
                    break;
                }
            }
            if (!hasNumber) {
                console.log(`Word #${a}: ${words}`)
                let b = 0;
                do {
                    let type = prompt(`Choose type of transformation for "${words}":uppercase/lowercase/capitalize `,'uppercase');
                    if (type === 'uppercase' || type === 'lowercase' ||  type === 'capitalize') {
                        let result ;
                        if (type === 'uppercase') {
                            result = words.toUpperCase();
                        } else if (type === 'lowercase') {
                            result = words.toLowerCase();
                        }else {
                            result = words[0].toUpperCase() + words.slice(1);
                        }
                        b += 1;
                        console.log(`Transform type for word#${a}: ${type}`);
                        console.log(`Transformed word #${a}: ${result}`);
                        console.log(`Sentance: ${result}`);
                        text.push(result)
                    }
                }while(b < 1);
                a += 1;
            }
        }
    } while (a < 4);
    console.log('--------------------------');
    console.log(`${text[0]} ${text[1]} ${text[2]}!`);
}










