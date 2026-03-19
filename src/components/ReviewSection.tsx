import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Send, CheckCircle2, MessageSquareQuote, Phone, User, ArrowLeft } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ReviewSection = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgpbydy';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('rating', String(rating));
    formData.append('_subject', `⭐ New AI Solution Review from ${formData.get('name')} (${rating}/5 stars)`);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        formRef.current?.reset();
        setRating(0);
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  const handleBackToForm = () => {
    setFormStatus('idle');
    setErrorMessage('');
  };

  // ✅ Success / Thank You State
  if (formStatus === 'success') {
    return (
      <section className="py-16 px-4" id="review-section">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 p-12 rounded-2xl border border-primary/15 shadow-lg relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white mb-6 mx-auto animate-bounce shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-3xl font-bold gradient-text mb-3">Thank You! 🎉</h3>
              <p className="text-xl text-secondary font-semibold mb-2">Your Review Has Been Submitted</p>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                We truly appreciate you taking the time to share your experience with RDbiz AI Solutions.
                Your feedback helps us deliver even better AI solutions!
              </p>

              <div className="flex items-center justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                    style={{ animationDelay: `${star * 0.1}s` }}
                  />
                ))}
              </div>

              <Button
                onClick={handleBackToForm}
                variant="outline"
                className="px-8 py-3 text-base font-semibold border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Leave Another Review
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4" id="review-section">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
            <MessageSquareQuote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Your feedback matters! Tell us about your experience with RDbiz AI Solutions and help others discover intelligent solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left Side - Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-card border border-primary/15 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 relative overflow-hidden"
            >
              {/* Form decorative element */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="inline-block w-1.5 h-6 bg-primary rounded-full" />
                Write a Review
              </h3>

              {/* Name Input */}
              <div className="mb-5">
                <label htmlFor="review-name" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="review-name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-base"
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-5">
                <label htmlFor="review-phone" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="review-phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-base"
                />
              </div>

              {/* Star Rating */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Star className="w-4 h-4 text-primary" />
                  Your Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="p-1 transition-transform duration-200 hover:scale-125 focus:outline-none"
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`w-8 h-8 transition-colors duration-200 ${star <= (hoveredStar || rating)
                          ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm'
                          : 'text-muted-foreground/30'
                          }`}
                      />
                    </button>
                  ))}
                  {rating > 0 && (
                    <span className="ml-3 text-sm font-medium text-secondary animate-fade-in">
                      {rating === 1 && '😐 Fair'}
                      {rating === 2 && '🙂 Good'}
                      {rating === 3 && '😊 Very Good'}
                      {rating === 4 && '😄 Excellent'}
                      {rating === 5 && '🤩 Outstanding!'}
                    </span>
                  )}
                </div>
              </div>

              {/* Review Textarea */}
              <div className="mb-6">
                <label htmlFor="review-text" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <MessageSquareQuote className="w-4 h-4 text-primary" />
                  Your Review <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="review-text"
                  name="review"
                  required
                  rows={5}
                  placeholder="Share your thoughts about our AI solutions and services..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-base resize-none"
                />
              </div>

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="mb-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium animate-fade-in">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-6 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {formStatus === 'submitting' ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting Your Review...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Submit Review
                  </span>
                )}
              </Button>

              {/* Formspree hidden fields */}
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_template" value="table" />
            </form>
          </div>

          {/* Right Side - Why Review Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why Leave Review Card */}
            <div className="bg-gradient-to-br from-primary/8 to-secondary/8 border border-primary/15 rounded-2xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                💬 Why Your Review Matters
              </h4>
              <div className="space-y-4">
                {[
                  { icon: '🌟', text: 'Help others discover intelligent AI solutions' },
                  { icon: '📈', text: 'Drive us to innovate continuously' },
                  { icon: '🤝', text: 'Build a trusted community of AI adopters' },
                  { icon: '🎯', text: 'Shapes our future AI product roadmap' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card/60 hover:bg-card transition-colors duration-300"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-card border border-secondary/20 rounded-2xl p-6 shadow-md text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">Trusted by Our AI Partners</p>
              <p className="text-xs text-muted-foreground">
                Your reviews are directly delivered to our team for prompt attention
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card border border-primary/15 rounded-xl p-4 text-center hover-lift">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground font-medium">AI Deployments</p>
              </div>
              <div className="bg-card border border-secondary/15 rounded-xl p-4 text-center hover-lift">
                <p className="text-2xl font-bold text-secondary">98%</p>
                <p className="text-xs text-muted-foreground font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
