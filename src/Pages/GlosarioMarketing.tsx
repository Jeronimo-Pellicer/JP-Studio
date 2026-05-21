import React from "react";
import SEO from "../Components/shared/SEO";
import Index from "../Glosario/src/pages/Index";

export default function GlosarioMarketingPage() {
	return (
		<div className="w-full min-h-[70vh]">
			<SEO
				title="Glosario de Marketing | JP Studio"
				description="Definiciones claras y prácticas de marketing digital, UX y analítica para equipos y estudiantes."
				url="/glosario-marketing"
			/>
			<Index />
		</div>
	);
}
