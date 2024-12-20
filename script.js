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
//gibt uns das Zeichen zurück die wir gerade betrachten

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe13(args) {
  const input = args
  const result = []

  let pos = -1 //Die Variable 'pos' wird auf -1 gesetzt, um die Position des letzten 'e' zu speichern
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Das aktuelle zeichen wird in der Resultatliste gespeichert

    // Wenn das aktuelle Zeichen ein 'e' ist, speichere die Position

    if (currentElement === "e") {
      pos = i //Setze 'pos' auf die aktuelle Position des 'e'.
    }
  }
  // Gib die Position des letzten 'e' zurück (falls gefunden), andernfalls bleibt pos auf -1.
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
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe22(args) {
  const input = args
  const result = []

  // Variable, um zu überprüfen, ob "k" gefunden wurde
  let kFound = false

  // Schleife durch jedes Zeichen in der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Überprüfen, ob das aktuelle Zeichen "k" ist
    if (currentElement === "k") {
      kFound = true // "k" gefunden, ab jetzt wird der Rest der Eingabe nicht mehr ersetzt
    }

    // Wenn "k" noch nicht gefunden wurde, ersetze das Zeichen durch "_"
    if (kFound === false) {
      // Ab dem ersten "k" beibehalten, was folgt
      result.push("_")
    } else {
      // Ab dem ersten "k" beibehalten, was folgt
      result.push(currentElement)
    }
  }
  // Ergebnis als String zurückgeben
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
    const currentElement = input[i] // Das aktuelle Zeichen wird in der Resultatliste gespeichert

    // Wenn es das erste Zeichen ist, tausche es mit dem letzten Zeichen
    if (i === 0) {
      result.push(input[input.length - 1]) // Das letzte Zeichen wird an den Anfang des 'result' Arrays ( liste ) eingefügt

      // Wenn es das letzte Zeichen ist, tausche es mit dem ersten Zeichen
    } else if (i === input.length - 1) {
      result.push(input[0]) // Das erste Zeichen wird ans Ende der 'result' Liste eingefügt
    } else {
      result.push(currentElement) // Das aktuelle Zeichen wird unverändert eingefügt
    }
  }
  //gib das Ergebnis zurück als String
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Prüfen Sie ob nach jedem `.` ein Leerschlag kommt.
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true // Gib 'true' zurück, wenn nach dem Punkt ein Leerzeichen kommt
      }
      return false // Gib 'false' zurück, wenn nach dem Punkt kein Leerzeichen kommt
    }
  }
}
{
  linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)
}

export function aufgabe25(args) {
  const input = args
  const result = []
  // Überprüfe ob die Länge des Strings gerade oder ungerade ist
  if (input.length % 2 === 0) {
    //Wenn die Länge des Strings gerade ist, gebe den Index der beiden mittleren Elemente an
    const middleIndex = Math.floor(input.length / 2) - 1 //Index des ersten mittleren Zeichens
    const middlePlusOneIndex = middleIndex + 1 // Index des zweiten mittleren Zeichens

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Wenn der aktuelle 'Index' einer von den mittleren Elementen ist, lass es weg

      if (i === middleIndex || i === middlePlusOneIndex) {
        //lass das Element weg
      } else {
        result.push(currentElement) //Füge alle anderen Zeichen zur 'result' Liste an
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

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i] // Das aktuelle Zeichen (ab dem Ende der Liste) wird gespeichert.

    // Kehren Sie die Eingabe um.
    result.push(currentElement)
  }
  // Gib das umgekehrte Ergebnis als Liste zurück
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

  // Vergleiche die ASCII-Werte des ersten und zweiten Elements
  if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
    // Wenn der ASCII-Wert des ersten Elements größer ist als der des zweiten,
    // tausche die Positionen der beiden Elemente
    result.push(secondElement)
    result.push(firstElement)
  } else {
    // Wenn der ASCII-Wert des ersten Elements kleiner oder gleich dem des zweiten ist, behalte die Reihenfolge der Elemente bei
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

  // Wenn der Eingabestring leer ist, gib 'false' zurück
  if (input.length === 0) {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Hole den ASCII-Wert des aktuellen Zeichens
    const asciiCode = currentElement.charCodeAt(0)
    //Testen Sie, ob das Zeichen eine Zahl ist
    //Überprüfe, ob der ASCII-Wert des Zeichens zwischen 48 (für '0') und 57 (für '9') liegt
    if (48 <= asciiCode && asciiCode <= 57) {
      // Das Zeichen ist eine Zahl, nichts weiter tun
    } else {
      // Wenn ein Zeichen keine Zahl ist, gib 'false' zurück
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result1 = [] // leere Liste, um die erste Zahl zu speichern
  const result2 = [] // leere Liste, um die zweite Zahl zu speichern

  let secondNum = false //Variable, um festzulegen ob die zweite Zahl gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //Der  ASCII-Wert des aktuellen Zeichens wird ermittelt.

    if (ascii >= 48 && ascii <= 57) {
      // Überprüfe, ob das aktuelle Zeichen eine Zahl ist (ASCII-Werte für '0' bis '9' sind zwischen 48 und 57)
      if (secondNum === false) {
        // Wenn es die erste Zahl ist, füge das Zeichen zu 'result1' hinzu
        result1.push(currentElement)
      } else {
        // Wenn es die zweite Zahl ist, füge das Zeichen zu 'result2' hinzu
        result2.push(currentElement)
      }
    } else if (ascii === 32) {
      //Ist das Zeichen ein leerzeichen, ist die erste Zahl abgeschlossen
      secondNum = true //Nun wurde die zweite Zahl erreicht
    } else {
      // Wenn das Zeichen weder eine Zahl noch ein Leerzeichen ist, gibt es eine ungültige Eingabe
      return null // Rückgabe von null, wenn ein ungültiges Zeichen gefunden wird
    }
  }

  const num1 = parseInt(result1.join(""))
  const num2 = parseInt(result2.join(""))
  return num1 + num2
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Jedes Zeichen  wird doppelt hinzugefügt
    result.push(currentElement) // Füge das Zeichen einmal hinzu
    result.push(currentElement) // Füge das Zeichen ein zweites Mal hinzu
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
      result.push(i) // Wenn es ein "e" ist, speichere die Position (Index) in der 'result' liste.
    }
    // Wenn bereits drei "e"s gefunden wurden, gib die aktuelle Position (Index) zurück
    if (result.length === 3) {
      return i // Gibt den Index des dritten "e" zurück.
    }
  }
  // Wenn weniger als drei "e"s gefunden wurden, gib -1 zurück
  return -1 // Gibt -1 zurück, wenn das dritte "e" nicht gefunden wurde.
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  //Erstellt eine Variable, um zu erkennen, ob ein Leerzeichen (" ") im String gefunden wurde.
  let leerzeichenErkannt = false

  for (let i = 0; i < input.length; i++) {
    //aktuelles Zeichen wird in current Element gespeichert
    const currentElement = input[i]

    if (currentElement === " ") {
      // Falls Leerzeichen gefunden wurde, setzte die Variable 'Leerzeichen erkannt' auf true
      leerzeichenErkannt = true
    }
    // Wenn noch kein Leerzeichen gefunden wurde, füge das Zeichen zum 'result' Array hinzu.
    if (leerzeichenErkannt === false) {
      result.push(currentElement)
    }
  }
  // Wandelt das 'result' Array von Zeichen wieder in einen String um und gibt ihn zurück.
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function BubbleSort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    // Vergleiche die ASCII-Werte der beiden benachbarten Zeichen
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Wenn der ASCII-Wert des aktuellen Zeichens größer ist als der des nächsten

      // müssen die beiden Zeichen vertauscht werden.
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i] // Tausche das aktuelle Element mit dem nächsten
      list[i] = tmp
      // Wenn ein Tausch stattgefunden hat, starte die Schleife von vorne
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result // Gibt den sortierten String zurück
}

linkupExerciseHandler("[data-click=BubbleSort]", BubbleSort)

export function InsertionSort(args) {
  const text = args
  const list = text.split("") // Den Text in eine Liste von Zeichen umwandeln, damit man die Elemente vertauschen kann

  // Beginnt den Sortierprozess ab dem zweiten Element der Liste
  for (let i = 1; i < list.length; i++) {
    const currentElement = list[i] // Das aktuelle Element, das an die richtige Stelle eingefügt werden soll
    let j = i - 1

    // Verschiebt Elemente, die größer als currentElement sind, nach rechts
    while (j >= 0 && list[j].charCodeAt(0) > currentElement.charCodeAt(0)) {
      const tmp = list[j + 1] // Temporäre Variable zum Tauschen der Elemente
      list[j + 1] = list[j] // Verschiebe das Element nach rechts
      list[j] = tmp // Setze das aktuelle Element an die richtige Stelle
      j--
    }
  }
  const result = list.join("") // Wandelt die sortierte Liste zurück in einen String

  return result // Gibt den sortierten String zurück
}

linkupExerciseHandler("[data-click=InsertionSort]", InsertionSort)
export function BucketSort(args) {
  const text = args // Der Eingabetext
  const list = text.split("") // Den Text in eine Liste von Zeichen umwandeln
  const buckets = []

  // Erstelle 26 Buckets (einen für jeden Buchstaben
  for (let i = 0; i < 26; i++) {
    buckets.push([]) // Füge leere Buckets hinzu
  }

  // Verteile jedes Zeichen in den entsprechenden Buckets (basierend auf ASCII-Wert)
  for (let i = 0; i < list.length; i++) {
    const currentElement = list[i] // Das aktuelle Zeichen
    const bucketIndex = currentElement.charCodeAt(0) - 97 // Berechne den Index des Buckets anhand des ASCII-Werts

    // Falls der Index im Bereich der 26 Buckets liegt
    if (bucketIndex >= 0 && bucketIndex < 26) {
      buckets[bucketIndex].push(currentElement) // Füge das Zeichen in den entsprechenden Bucket ein
    }
  }

  //Sortiere die Zeichen in jedem Bucket
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort() // Sortiere die Zeichen im aktuellen Bucket aphabetisch
  }

  // Kombiniere die sortierten Buckets zu einem endgültigen Ergebnis
  let result = ""
  for (let i = 0; i < buckets.length; i++) {
    result += buckets[i].join("") // Füge die Zeichen jedes Buckets zu einem String zusammen
  }

  // Gib das sortierte Ergebnis zurück
  return result
}

linkupExerciseHandler("[data-click=BucketSort]", BucketSort)

export function eigeneAufgabe1(args) {
  const input = args // Der Eingabetext, z.B. "einfach text..."
  const result = [] // Array für das Ergebnis
  let count = 0 // Zähler für das zweite Zeichen

  // Iteration über den gesamten Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Aktuelles Zeichen

    // Wenn das Zeichen ein Leerzeichen ist, ersetze es mit 'F' und zähle es
    if (currentElement === " ") {
      result.push("F")
      count++ // Leerzeichen zählt auch
    } else {
      // Überprüfe, ob es sich um das zweite Zeichen handelt
      if (count % 2 !== 0) {
        // Wenn es noch kein Großbuchstabe ist, wandle es um
        if (currentElement !== currentElement.toUpperCase()) {
          result.push(currentElement.toUpperCase())
        } else {
          result.push(currentElement) // Wenn es bereits ein Großbuchstabe ist, bleibt es gleich
        }
      } else {
        result.push(currentElement) // Andernfalls bleibt das Zeichen unverändert
      }
      count++ // Zähler erhöhen
    }
  }

  // Gib das Ergebnis als einen zusammengefügten String zurück
  return result.join("")
}

// Event-Handler für die Aufgabe mit linkup
linkupExerciseHandler("[data-click=eigeneAufgabe1]", eigeneAufgabe1)

export function eigeneAufgabe2(args) {
  const input = args
  let sum = 0 // Variable, um die Summe der gefundenen Zahlen zu speichern
  let hasNumber = false // überprüft ob eine Zahl vorhanden ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //Aktuelles Element
    // Versuche jedes Zeichen in der aktuellen Zeichenkette auf Zahl zu prüfen
    for (let j = 0; j < currentElement.length; j++) {
      const currentChar = currentElement[j] //Aktuelles Zeichen

      // überprüfe ob das Zeichen eine Zahl ist
      if (!isNaN(currentChar) && currentChar !== " ") {
        sum += parseInt(currentChar) // Zahl zur Summe hinzufügen
        hasNumber = true // Zahl wurde gefunden
      }
    }
  }
  // wenn eine Zahl gefunden wurde gebe die Summe zurück ansonsten gebe s zurück
  if (hasNumber) {
    return sum
  } else {
    return "s"
  }
}

linkupExerciseHandler("[data-click=eigeneAufgabe2]", eigeneAufgabe2)

export function eigeneAufgabe3(args) {
  const input = args
  let hasLetter = false //überprüft ob ein buchstabe gefunden wurde
  let hasNumber = false //überprüft ob eine Zahl gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i] //Aktuelles Zeichen
  }
}
