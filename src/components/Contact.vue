<template>
	<section class="contact-section">
		<div class="container">
					<div class="contact-row">
						<div class="contact-image-card">
							<div class="card-image-wrap">
								<img :src="imgSrc" alt="contact visual" />
								<div class="card-overlay">
									<div class="overlay-text">LET'S CONNECT AND<br/>CREATE THE NEXT BIG<br/>THING IN TECH</div>
								</div>
							</div>
						</div>

										<div class="contact-form dark">
											<div class="intro"><div class="kicker">BUILD THE FUTURE WITH US</div>
											<h2 class="contact-title">CONTACT US</h2></div>
											<form @submit.prevent="onSubmit" class="form-root">
												<div class="fields">
													<div class="field">
															<label for="name">Name *</label>
															<input id="name" v-model="form.name" placeholder="Enter Your Name" required @blur="validateName" @input="validateName" />
															<div class="error" v-if="errors.name">{{ errors.name }}</div>
														</div>
														<div class="field">
															<label for="email">Email *</label>
															<input id="email" type="email" v-model="form.email" placeholder="Enter Email" required @blur="validateEmail" @input="validateEmail" />
															<div class="error" v-if="errors.email">{{ errors.email }}</div>
														</div>
													<div class="field phone-field">
														<label for="phone">Phone Number *</label>
														<div class="phone-row">
																				<div class="country-picker">
																					<button type="button" class="country-btn" @click="toggleCountry">
																																			<span class="flag">{{ selected.flag }}</span>
																																			<span class="dial">{{ selected.dial }}</span>
																																			<span class="caret">▾</span>
																																		</button>
																																		<ul v-if="countryOpen" class="country-list">
																																			<li v-for="c in countries" :key="c.code" @click="selectCountry(c)">{{ c.flag }} {{ c.label }} {{ c.dial }}</li>
																																		</ul>
																				</div>
																					<input id="phone" v-model="form.phone" placeholder="Enter Your Phone Number" required @blur="validatePhone" @input="validatePhone" />
																					<div class="error" v-if="errors.phone">{{ errors.phone }}</div>
														</div>
													</div>
													<div class="field">
														<label for="message">Message</label>
														<textarea id="message" v-model="form.message" placeholder="Write your message" rows="6"></textarea>
													</div>
												</div>

												<div class="actions">
													<button type="submit" class="send-btn" :disabled="!isValid">
														<span>Send Message</span>
														<span class="send-icon">➜</span>
													</button>
												</div>
											</form>
										</div>
					</div>
		</div>
	</section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const imgSrc = new URL('../assets/img/Image0004.png', import.meta.url).href
const form = reactive({ name: '', email: '', message: '', phone: '', country: 'in' })

// countries (small demo set)
const countries = [
	{ code: 'in', label: 'India', dial: '+91', flag: '🇮🇳' },
	{ code: 'us', label: 'United States', dial: '+1', flag: '🇺🇸' }
]
const countryOpen = ref(false)
const selected = ref(countries[0])
function toggleCountry() { countryOpen.value = !countryOpen.value }
function selectCountry(c) { form.country = c.code; selected.value = c; countryOpen.value = false }

// Validation state
const errors = reactive({ name: '', email: '', phone: '' })

function validateName() {
	errors.name = form.name && form.name.trim().length >= 2 ? '' : 'Please enter your name (min 2 characters)'
}

function validateEmail() {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	errors.email = form.email && re.test(form.email) ? '' : 'Please enter a valid email address'
}

function validatePhone() {
	// basic phone validation: digits + length check (after removing non-digits)
	const digits = form.phone ? form.phone.replace(/\D/g, '') : ''
	errors.phone = digits.length >= 7 && digits.length <= 15 ? '' : 'Please enter a valid phone number'
}

// run validators on the fly
function touchAll() { validateName(); validateEmail(); validatePhone() }

const isValid = computed(() => {
	// ensure required fields and no error messages
	return form.name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (form.phone.replace(/\D/g, '').length >= 7)
})

function onSubmit() {
	touchAll()
	if (!isValid.value) {
		// prevent submission and let user see errors
		return
	}
	// lightweight demo handler — replace with API call
	console.log('submit', { ...form })
	alert('Message sent (demo)')
	form.name = form.email = form.message = form.phone = ''
}
</script>

<style scoped>
.contact-section { padding: 48px 16px; margin-top:50px}
.container { max-width:1200px; margin:0 auto }
.contact-row { display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:start }
.contact-image-card { border-radius:24px; overflow:hidden; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); padding:12px }
.card-image-wrap { position:relative; height:100% }
.card-image-wrap img { width:100%; height:100%; object-fit:cover; display:block }
.card-overlay { position:absolute; left:24px; top:24px; color:#000; font-family: 'NYXERIN'; font-weight:400; font-size:28px; text-transform:uppercase }
.contact-form.dark { background: #0b0b0b; padding:24px; border-radius:12px; color:#fff; display:flex; flex-direction:column }
.contact-form .kicker { color:#BB83FF; font-family: 'Ninetea'; font-weight:600; font-size:12px; margin-bottom:6px }
.contact-title { font-family: 'NYXERIN'; font-size:48px; margin:0 0 12px 0 }
.field { margin-bottom:14px; display:flex; flex-direction:column }
.field label { margin-bottom:6px; color:#C0C0C0; font-family: 'Ninetea'; font-weight:500 }
.field input, .field textarea { padding:12px 14px; border-radius:8px; border:1px solid rgba(255,255,255,0.06); background:#111; color:#C0C0C0 }
.phone-row { display:flex; gap:10px }
.country-select { padding:8px 10px; border-radius:8px; background:#111; color:#C0C0C0; border:1px solid rgba(255,255,255,0.06) }
.actions { display:flex; justify-content:flex-start }
.send-btn { display:inline-flex; align-items:center; gap:12px; background: linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%); color:#fff; padding:12px 20px; border:none; border-radius:999px; font-family: 'Ninetea'; font-weight:600 }
.send-icon { background:#fff; color:#8500A6; width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center; border-radius:999px }

/* make left image and right form equal height */
.contact-row { align-items: stretch }
.contact-image-card, .contact-form.dark { height:100% }

/* make form sections grow so button aligns to bottom and form matches image height */
.form-root { display:flex; flex-direction:column; height:100% }
.fields { flex:1; display:flex; flex-direction:column }
.actions { margin-top:12px }

.country-picker { position:relative }
.country-btn { display:inline-flex; gap:6px; align-items:center; padding:8px 10px; border-radius:8px; background:#111; color:#C0C0C0; border:1px solid rgba(255,255,255,0.06) }
.country-list { position:absolute; left:0; top:calc(100% + 6px); background:#111; color:#fff; border-radius:8px; padding:6px; box-shadow:0 6px 20px rgba(0,0,0,0.5); list-style:none; margin:0 }
.country-list li { padding:6px 10px; cursor:pointer }
.country-list li:hover { background:rgba(255,255,255,0.03) }

.error { color:#FF6B6B; font-size:13px; margin-top:6px; font-family: 'Ninetea' }

.send-btn[disabled] { opacity:0.5; cursor:not-allowed }

@media (max-width: 768px) {
	.contact-row { grid-template-columns: 1fr; }
	.actions { justify-content:center }
	.contact-title { font-size:32px }
	.card-overlay { font-size:18px }
}
</style>

