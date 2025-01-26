"use client";

import React, {useContext, useEffect, useState} from "react";
import EventsHeader from "@/components/events/events-header";
import JumpBar from "@/components/events/jump-bar";
import Alert from "@/components/alert/alert";
import {UserContext} from "@/context/user-context";
import {getUserDoc} from "@/lib/actions";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "@/firebase/firebase";
import {eventData} from "@/lib/event-data";
import EventSection from "@/components/events/event-section";
import {useRouter} from "next/navigation";

const EventsPage = () => {
	const [regEvents, setRegEvents] = useState<string[]>();
	const {currentUserID, setCurrentUserID} = useContext(UserContext);
	const router = useRouter();
	
	useEffect(() => {
		(async () => {
			if (currentUserID) {
				try {
					const {registeredEvents} = await getUserDoc(currentUserID);
					setRegEvents(registeredEvents);
				} catch (error) {
					setCurrentUserID(null);
					await router.push("/");
				}
			}
		})();
	}, []);
	
	useEffect(() => {
		(async () => {
			if (currentUserID) {
				const userDoc = doc(db, "users", currentUserID);
				if (regEvents) {
					try {
						await updateDoc(userDoc, {
							registeredEvents: regEvents,
						});
					} catch (error) {
						setCurrentUserID(null);
						await router.push("/");
					}
				}
			}
		})();
	}, [regEvents]);
	
	return (
		<div className="relative fade-in-page">
			<EventsHeader/>
			<div className="sticky top-16 sm:top-20 z-40">
				<JumpBar/>
			</div>
			<div className="flex flex-col items-center gap-5 px-5 py-12 md:px-12">
				<Alert variant="success">
					We&apos;ve rolled out new features in the website, and you can now view the slides and the gallery after the
					session is completed.
				</Alert>
				<Alert variant="warning">
					We&apos;ve maxed out capacity for all the sessions. Registrations from this point on will be counted, but
					seating
					will be subject to availability in the venue.
				</Alert>
				{eventData.map((event) => (
					<EventSection
						props={event}
						key={event.id}
						regEvents={regEvents}
						setRegEvents={setRegEvents}
					/>
				))}
			</div>
		</div>
	);
};

export default EventsPage;
