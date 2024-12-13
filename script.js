import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatliste

  // läuft Zeichen für Zeichen über den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const upperCaseVersion = currentElement.toUpperCase()

    result.push(upperCaseVersion)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count++
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  const input = args

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      // Wenn es zwischen 65 und 90 ist, stimmt es
      hasUpperCaseLetter = true
    }
  }

  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe04(args) {
  const input = args
  const result = []

  // Wir filtern die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // hier sind 2 Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  // jetzt können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // da es ein wort mehr wie leerzeichen gibt, geben wie leerzeichen +1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
      result.push(3) // 3 ersetzt "e"
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe11(args) {
  const input = args

  //Erstelle eine Variable um den ASCII- Code zu speichern
  let asciiCode = null

  //Speichere den ASCII-Code vom ersten Zeichen in der Variable
  asciiCode = input.charCodeAt(0)

  //Gib den ASCII-Code zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe06(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wandle in einen Grossbuchstaben um
    const upperCaseVersion = currentElement.toUpperCase()
    //Wandle in einen Kleinbuchstaben um
    const lowerCaseVersion = currentElement.toLowerCase()
    //Prüfe ob groß und klein gleich sind
    if (upperCaseVersion === lowerCaseVersion) {
      //gib true zurück
      return true
    }
  }
  //gib falsch zurück
  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Prüfe ob das aktuelle Element ein u ist
    if (currentElement === "u") {
      //Prüfe ob das nächste Element ein n ist
      if (input[i + 1] === "n") {
        //Prüfe ob das dritte Element ein d ist
        if (input[i + 2] === "d") {
          // das ist das richtige Element
          return true
        }
      }
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Erstelle eine zählvariable
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Zähle count um eins hoch
    count = count + 1
  }
  // Wenn count genau glaich 6 ist, dann gib wahr zurück
  if (count === 6) {
    return true
  }
  // Gib falsch zurück
  return false
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe12(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Suche die Position des letzten `e`s in einem Text.

    if (currentElement === "e") {
      return i
    }
  }

  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)
//

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []
  let dollarFound = false
  //left dollar ist true
  //right dollar ist false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (dollarFound === false) {
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
    if (currentElement === "$") {
      dollarFound = true
    }
  }
  return [result1.join(""), result2.join("")]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

//gibt uns das Zeichen zurück die wir gerade betrachten

export function aufgabe13(args) {
  const input = args
  const result = []

  let pos = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Suche die Position des letzten `e`s in einem Text.
    if (currentElement === "e") {
      pos = i
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe10(args) {
  const input = args
  const result = []

  //Teste ob das erste Zeichen ein # ist
  if (input[0] === "#") {
    //return true
  } else {
    return false
  }

  // Teste ob input genau 7 Zeichen lang ist
  if (input.length !== 7) {
    //return true
  } else {
    return false
  }

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    // Teste ob ascii zwischen 48 und 57 ist
    if (ascii >= 48 && ascii <= 57) {
      //return true
    } else {
      return false
    }

    // Teste ob ascii zwischen 65 und 70 ist
    if (ascii >= 65 && ascii <= 70) {
      //return true
    } else {
      return false
    }
  }

  return true
}

export function aufgabe22(args) {
  const input = args
  const result = []

  let toggle = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (toggle === false) {
      result.push("_")
    } else {
      result.push(currentElement)
    }

    if (currentElement === "k") {
      toggle = true
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  // Bitte erstelle mir eine neue variable die das erste zeichen von input speichert
  const firstElement = input[0]

  // Bitte hänge das erste element an result an
  result.push(firstElement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // hänge current element an result an
    result.push(currentElement)
  }

  // bitte hänge das erste element nochmals ganz hinten an result an¨
  result.push(firstElement)

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  if (input.length % 2 === 0) {
    const middleIndex = Math.floor(input.length / 2) - 1
    const middlePlusOneIndex = middleIndex + 1

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (i === middleIndex || i === middlePlusOneIndex) {
        //lass das Element weg
      } else {
        result.push(currentElement)
      }
    }
  } else {
    // Bitte erstelle mir eine Variable, die das mittle Zeichen speichert
    const middleIndex = Math.floor(input.length / 2)
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (i === middleIndex) {
        //lass das Element weg
      } else {
        result.push(currentElement)
      }
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Prüfen Sie ob nach jedem `.` ein Leerschlag kommt.
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true
      }
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    // Kehren Sie die Eingabe um.
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe26(args) {
  const input = args
  const result = []

  //Bitte erstelle eine neue Variable, die dass erste Element speichert
  const firstElement = input[0]

  //Bitte erstelle eine neue Variable, die dass zweite Element speichert
  const secondElement = input[1]

  // Wenn der ASCII-Wert des ersten Elements grösser ist als des zweiten, dann vertausche die Elemente
  if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
    // vertausche die Elemente
    result.push(secondElement)
    result.push(firstElement)
  } else {
    result.push(firstElement)
    result.push(secondElement)
  }

  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)
