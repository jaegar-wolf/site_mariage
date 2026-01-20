import { onMounted, onUnmounted, type Ref, type ShallowRef } from 'vue'

export const useObserver = <T, U extends Element | null>(
  ref: Ref<T>,
  templateRef: Readonly<ShallowRef<U>>,
  inViewValue: T,
  outViewvalue: T,
) => {
  let observer: IntersectionObserver

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === templateRef.value) {
          ref.value = inViewValue
        } else {
          ref.value = outViewvalue
        }
      })
    })
    if (templateRef.value) {
      observer.observe(templateRef.value)
    }
  })

  onUnmounted(() => {
    if (templateRef.value) {
      observer.unobserve(templateRef.value)
    }
  })
}
