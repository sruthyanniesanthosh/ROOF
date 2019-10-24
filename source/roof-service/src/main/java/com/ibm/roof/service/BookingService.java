package com.ibm.roof.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.roof.model.Booking;
import com.ibm.roof.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository bookingRepository;
	
	public boolean bookProperty(Booking booking){
		bookingRepository.insert(booking);
		return true;
		
	}
	
	public List<Booking> getAll() {
		
			System.out.println("addProp");
			 
			return bookingRepository.findAll();
			
		
	}
	
	public List<Booking> getByPropertyId(String propertyId) {
		
		System.out.println("addProp");
		 
		return bookingRepository.getByPropertyId(propertyId);
		
	
}
}