sha = require('js-sha256');
library = [];
library.push(`Many people are able to perceive polarization of light. Haidinger's brushes may be seen as a yellowish horizontal bar or bow tie shape (with "fuzzy" ends, hence the name "brush") visible in the center of the visual field against the blue sky viewed while facing away from the sun, or on any bright background. It typically occupies roughly 3–5 degrees of vision, about twice or three times the width of one's thumb held at arm's length. The direction of light polarization is perpendicular to the yellow bar (i.e., vertical if the bar is horizontal). Fainter bluish or purplish areas may be visible between the yellow brushes (see illustration). Haidinger's brush may also be seen by looking at a white area on many LCD flat panel computer screens (due to the polarization effect of the display), in which case it is often diagonal.`)
library.push(`Haidinger's brush is usually attributed to the dichroism of the xanthophyll pigment found in the macula lutea. Pursuant to the Fresnel laws, the behavior and distribution of unguided oblique rays in the cylindrical geometry of the foveal blue cones produce an extrinsic dichroism. The size of the brush is consistent with the size of the macula.  It is thought that the macula's dichroism arises from some of its pigment molecules being arranged circularly; (the small proportion of circularly arranged molecules accounts for the faintness of the phenomenon.) Xanthophyll pigments tend to be parallel to visive nerves that (because the fovea is not flat), are almost orthogonal to the fovea in its central part but nearly parallel in its outer region. As a result, two different areas of the fovea can be sensitive to two different degrees of polarization.`)
library.push(`Hope is what keeps life going. Parents always hope their children will do well. Hope makes us dream. Hope builds in patience.`);
library.push(`Failure is the path to success. It helps us to touch the sky, teaches us to survive and shows us a specific way. Success brings in money,`);
library.push(`Life teaches us not to regret over yesterday, for it has passed and is beyond our control.`);
library.push(`Materialistic happiness is short-lived, but happiness achieved by bringing a smile on others face gives a certain level of fulfillment.`);
library.push(`Love plays a pivotal role on out life. Love makes you feel wanted. Without love a person could go hayward and also become cruel and ferocious.`)
library.push(`Life comes in a package. This package includes happiness and sorrow, failure and success, hope and despair.`)
library.push(` Peace of mind is the main link to happiness. No mind is happy without peace. We realize the true worth of happiness when we are in sorrow`)
hash = [];
for(i of library){
    hash.push(sha.sha256(i));
}

module.exports = {
    library,
    hash
};
  