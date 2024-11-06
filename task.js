

document.getElementById("checkButton").addEventListener("click", function() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const d = parseFloat(document.getElementById("d").value);

    // Проверяем, может ли внутренний прямоугольник уместиться внутри внешнего
    const canFit = (a <= c && b <= d) || (a <= d && b <= c);

    // Выводим результат
    const resultElement = document.getElementById("result");
    if (canFit) {
        resultElement.textContent = "Внутренний прямоугольник может уместиться внутри внешнего.";
    } else {
        resultElement.textContent = "Внутренний прямоугольник не может уместиться внутри внешнего.";
    }
});