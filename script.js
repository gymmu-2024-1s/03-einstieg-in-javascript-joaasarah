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

// Die Funktion 'aufgabe03' zählt die Vorkommen des Buchstabens 'e' und 'E' in der Eingabe
export function aufgabe03(args) {
  // 'input' erhält die Eingabedaten
  const input = args
  // 'result' erhaltet die Ergebnisliste
  const result = []

  // Zähler für die Anzahl der 'e' und 'E'
  let count = 0
  //Schleife, um jedes Element im 'input' zu durchlaufen
  for (let i = 0; i < input.length; i++) {
    // Aktuelles Element wird in der Variablen 'currentElement' gespeichert
    const currentElement = input[i]
    // Überprüfe, ob das aktuelle Element ein kleines 'e' ist
    if (currentElement === "e") {
      count = count + 1 // Zähle das Vorkommen von 'e'
    } else if (currentElement === "e") {
      count = count + 1
      // Überprüfe, ob das aktuelle Element ein großes 'E' ist
    } else if (currentElement === "E") {
      count++
    }
  }
  // Rückgabe des Zählwerts (Gesamtanzahl der 'e' und 'E')
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  // Aufgabe 5 überprüft, ob der Eingabestrang mindestens einen Großbuchstaben enthält
  const input = args //input enthält die Eingabedaten

  let hasUpperCaseLetter = false // Definiere eine Variable, die überprüft ob ein Großbuchstabe vorhanden ist

  for (let i = 0; i < input.length; i++) {
    // Aktuelles Zeichen wird in der Variablen 'currentElement' gespeichert
    const currentElement = input[i]
    // Bestimme den ASCII-Wert des aktuellen Zeichens
    const ascii = currentElement.charCodeAt(0)
    // Überprüfe, ob der ASCII-Wert im Bereich der Großbuchstaben liegt (65 bis       90)
    if (ascii >= 65 && ascii <= 90) {
      // Wenn es zwischen 65 und 90 ist, stimmt es
      // Wenn ein Großbuchstabe gefunden wird, setze 'hasUpperCaseLetter' auf true
      hasUpperCaseLetter = true
    }
  }
  // Rückgabe: Gibt true zurück, wenn ein Großbuchstabe gefunden wurde, andernfalls false
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe04(args) {
  // Die Funktion 'aufgabe04' zählt die Anzahl der Wörter in einem String,
  // wobei mehrere aufeinanderfolgende Leerzeichen ignoriert werden
  const input = args
  const result = []

  // Wir filtern die Eingabe so, dass nur noch Buchstaben (A-Z, a-z) und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Wenn das Zeichen ein Großbuchstabe (A-Z) ist, wird es in 'result' aufgenommen
    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
      // Wenn das Zeichen ein Kleinbuchstabe (a-z) ist, wird es ebenfalls in 'result' aufgenommen
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
      // Wenn das Zeichen ein Leerzeichen ist (ASCII-Wert 32), wird es auch in 'result' aufgenommen
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern

  // Jetzt haben wir alle Buchstaben und Leerzeichen, aber noch immer mehrere Leerzeichen hintereinander
  const result2 = []

  // Wir filtern aufeinanderfolgende Leerzeichen aus, sodass nur ein einziges Leerzeichen bleibt
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    // Wenn zwei Leerzeichen hintereinander sind, ignorieren wir das erste
    if (currentElement === " " && nextElement === " ") {
      // nichts tun, nur das doppelte Leerzeichen überspringen
    } else {
      result2.push(currentElement)
    }
  }
  // jetzt können wir die Leerzeichen zählen von der "bereinigten" Liste
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    // Jedes Leerzeichen wird gezählt
    if (currentElement === " ") {
      count++
    }
  }
  // da es ein wort mehr gibt  als Leerzeichen gibt, geben wir die Anzahl Leerzeichen +1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe08(args) {
  // Die Funktion 'aufgabe08' ersetzt alle Vorkommen des Buchstabens "e" im Eingabestring durch die Zahl "3"
  const input = args
  const result = [] // Hier speichern wir das Ergebnis
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn das aktuelle Zeichen ein "e" ist, füge "3" in das Ergebnis-Liste  ein
    if (currentElement === "e") {
      // do nothing
      result.push(3) // Ersetze "e" durch "3"
    } else {
      result.push(currentElement)
    }
  }
  return result.join("") // Verbindet alle Elemente des Arrays (Liste) zu einem String
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe11(args) {
  // Die Funktion 'aufgabe11' gibt den ASCII-Code des ersten Zeichens eines Strings (zeichenkette) zurück
  const input = args

  //Erstelle eine Variable um den ASCII-Code des ersten Zeichens zu speichern
  let asciiCode = null

  //Speichere den ASCII-Code des ersten Zeichens in der Variable "asciiCode"
  asciiCode = input.charCodeAt(0)

  //Gib den ASCII-Code des ersten Zeichens zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe06(args) {
  const input = args // Die Eingabe wird in der Variablen 'input' gespeichert
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Das aktuelle Zeichen wird im String gespeichert
    //Wandle das aktuelle Zeichen in einen Grossbuchstaben um
    const upperCaseVersion = currentElement.toUpperCase()
    //Wandle das aktuelle Zeichen in einen Kleinbuchstaben um
    const lowerCaseVersion = currentElement.toLowerCase()
    // Prüfe, ob der Großbuchstabe und der Kleinbuchstabe des aktuellen Zeichens gleich sind
    if (upperCaseVersion === lowerCaseVersion) {
      // Wenn das Zeichen weder Groß- noch Kleinbuchstabe ist (z.B. eine Zahl oder ein Sonderzeichen), gib 'true' zurück
      return true
    }
  }
  // wenn kein solches Zeichen gefunden wurde, gib 'false' zurück
  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Das aktuelle Zeichen wird im String gespeichert
    //Prüfe ob das aktuelle Element ein 'u' ist
    if (currentElement === "u") {
      //Prüfe ob das nächste Element ein 'n' ist
      if (input[i + 1] === "n") {
        //Prüfe ob das dritte Element ein 'd' ist
        if (input[i + 2] === "d") {
          // Wenn das Muster "und" gefunden wird, gib 'true' zurück

          return true
        }
      }
    }
  } // Wenn das Muster "und" nicht gefunden wird, gib 'false' zurück
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe09(args) {
  const input = args // Die Eingabe wird als String (Zeichenkette) in der Variablen 'input' gespeichert
  const result = []

  // Erstelle eine zählvariable 'count', um die Anzahl der Elemente zu zählen
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Das aktuelle Zeichen wird gespeichert
    // Zähle die Anzahl der Elemente, indem du count um eins erhöhst
    count = count + 1
  }
  // Wenn count genau gleich 6 ist, dann gib wahr zurück
  if (count === 6) {
    return true
  }
  //  Wenn die Anzahl der Elemente nicht genau 6 ist, gib 'false'zurück
  return false
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe12(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Das aktuelle Zeichen wird im String also in der Zahlenkette gespeichert

    //Suche die Position des letzten `e`s in einem Text.

    //Prüfe ob das aktuelle Zeichen ein 'e' ist
    if (currentElement === "e") {
      // Wenn 'e' gefunden wird, gib die aktuelle Position (Index) zurück
      return i
    }
  }

  // Wenn kein 'e' gefunden wurde, gib -1 zurück
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)
//

export function aufgabe16(args) {
  const input = args
  const result1 = [] // Liste, um die zeichen vor dem ersten Element zu speichern
  const result2 = [] //Liste um die Zeichen nach dem ersten Element zu speichern
  let dollarFound = false // gibt an ob ein Dollarzeichen bereits gefunden wurde
  //left dollar ist true
  //right dollar ist false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn noch kein Dollarzeichen gefunden wurde, speichere das Zeichen in 'result1'
    if (dollarFound === false) {
      result1.push(currentElement)
    } else {
      // Wenn bereits ein Dollarzeichen gefunden wurde, speichere das Zeichen in 'result2'

      result2.push(currentElement)
    }
    // Wenn das aktuelle Zeichen ein Dollarzeichen '$' ist, setze 'dollarFound' auf true
    if (currentElement === "$") {
      dollarFound = true
    }
  }
  //erster Teil enthält alle Zeichen vor dem ersten Dollarzeichen
  //zweiter Teil enthält alle Zeichen nach dem ersten Dollarzeichen
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

export function aufgabe27(args) {
  const input = args
  const result = []

  if (input.length === 0) {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0)
    //Testen Sie, ob das Zeichen eine Zahl ist
    if (48 <= asciiCode && asciiCode <= 57) {
    } else {
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Jedes Zeichen  wird doppelt
    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("") //Jedes Element wird hinzugefügt
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe14(args) {
  const input = args
  const result = [] // das ist die Resultatliste die wir erstellen wollen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Suche die Position des dritten `e`s in einem Text.
    if (currentElement === "e") {
      result.push(i)
    }
    if (result.length === 3) {
      return i
    }
  }
  return -1
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function BubbleSort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=BubbleSort]", BubbleSort)
