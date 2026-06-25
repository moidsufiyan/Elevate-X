export const computeMatchScore = (mentorProfile, startupProfile) => {
  let score = 0;

  // 1. Industry match (40 points)
  if (mentorProfile.industries && startupProfile.industry) {
    const hasIndustry = mentorProfile.industries.some(
      (ind) => ind.toLowerCase() === startupProfile.industry.toLowerCase()
    );
    if (hasIndustry) score += 40;
  }

  // 2. Expertise vs Startup Tags overlap (30 points max, 10 points per match)
  if (mentorProfile.expertise && startupProfile.tags) {
    const matches = mentorProfile.expertise.filter((exp) =>
      startupProfile.tags.some((tag) => tag.toLowerCase() === exp.toLowerCase())
    );
    score += Math.min(30, matches.length * 10);
  }

  // 3. Specialties vs Startup Tags overlap (20 points max, 10 points per match)
  if (mentorProfile.specialties && startupProfile.tags) {
    const matches = mentorProfile.specialties.filter((spec) =>
      startupProfile.tags.some((tag) => tag.toLowerCase() === spec.toLowerCase())
    );
    score += Math.min(20, matches.length * 10);
  }

  // 4. Profile verification bonus (10 points)
  if (mentorProfile.isVerified) score += 5;
  if (mentorProfile.isAvailable) score += 5;

  return score;
};
