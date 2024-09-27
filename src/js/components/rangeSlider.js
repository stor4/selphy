const rangeSlider = document.querySelector('.range-slider');
const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const sliderTrack = document.querySelector('.slider-track');
const rangeMinOutput = document.getElementById('range-min');
const rangeMaxOutput = document.getElementById('range-max');

// Получаем минимальное и максимальное значения из data-атрибутов
const minRangeValue = parseInt(rangeSlider.dataset.min) || 0;
const maxRangeValue = parseInt(rangeSlider.dataset.max) || 1000;

// Устанавливаем эти значения в качестве атрибутов min и max для бегунков
minRange.setAttribute('min', minRangeValue);
minRange.setAttribute('max', maxRangeValue);
maxRange.setAttribute('min', minRangeValue);
maxRange.setAttribute('max', maxRangeValue);

// Начальные значения бегунков
minRange.value = minRangeValue;
maxRange.value = maxRangeValue;

function updateSlider() {
  // Получаем значения бегунков
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  // Проверяем, чтобы бегунки не пересекались
  if (minVal >= maxVal - 10) {
    if (event.target === minRange) {
      minVal = maxVal - 10;
      minRange.value = minVal;
    } else {
      maxVal = minVal + 10;
      maxRange.value = maxVal;
    }
  }

  // Обновляем значения на экране
  rangeMinOutput.textContent = minVal;
  rangeMaxOutput.textContent = maxVal;

  // Вычисляем позицию заполненной полосы
  let minPercent = ((minVal - minRangeValue) / (maxRangeValue - minRangeValue)) * 100;
  let maxPercent = ((maxVal - minRangeValue) / (maxRangeValue - minRangeValue)) * 100;

  sliderTrack.style.background = `linear-gradient(to right, #ddd ${minPercent}%, rgb(0, 122, 179) ${minPercent}%, rgb(0, 122, 179) ${maxPercent}%, rgb(0, 122, 179) ${maxPercent}%)`;
}

// Обработчики событий для обновления слайдера
minRange.addEventListener('input', updateSlider);
maxRange.addEventListener('input', updateSlider);

// Начальная инициализация слайдера
updateSlider();
